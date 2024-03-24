import './App.css'
import Product from './components/product'

function App() {

  return (
    <>
      <Product name='Laptop' price={50000} brand='Dell'/>
      <Product name='Laptop' price={70000} brand='HP'/>
    </>
  )
}

export default App
