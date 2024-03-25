import { useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  
  const [password,setPassword]= useState('')
  const [length,setLength]=useState(8)
  const [numberallowed,setNumberAllowed]=useState(false)
  const [characterallowed,setcharacterAllowed]=useState(false)
  
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberallowed){
      str+='0123456789'
    }
    if (characterallowed){
      str+='@#$&*%'
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },
  [length,numberallowed,characterallowed])

  const passwordCopy=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  },[password])

  useEffect(()=>{passwordGenerator()},[numberallowed,characterallowed,length])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-gray-800 text-gray-200 mt-20'>
      <h1 className='text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-black'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='passowrd' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passwordCopy}>Copy</button>
      </div>
      
      <div className='flex flex-wrap gap-4'>
      <div className='flex flex-wrap gap-2'>
        <input type='range' min={8} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length:{length}</label>
        </div>
        <div className='flex flex-wrap gap-1'>
        <input type='checkbox' defaultChecked={numberallowed} id='number' onChange={()=>setNumberAllowed((prev)=>!prev)}/>
        <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex flex-wrap gap-1'>
        <input type='checkbox' defaultChecked={characterallowed} id='character' onChange={()=>setcharacterAllowed((prev)=>!prev)}/>
        <label htmlFor='character'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
