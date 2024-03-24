import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)  
  const addvalue= () =>{
    setCount(prevCount => prevCount+1)
  }
  const removevalue= () =>{
    if (count>=1){
      setCount(prevCount => prevCount-1)
    }
    else{
      alert('cannot go beyond 0')
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Value : {count} </h2>
      <button onClick={addvalue}>ADD</button>
      <br/><br/>
      <button onClick={removevalue}>REMOVE</button>
      <br/><br/>
      <footer>Note: cannot go beyond 0</footer>
    </>
  )
}

export default App
