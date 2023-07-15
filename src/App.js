import './App.css'
import Test from './Test'

function App(){
  return(
    <>
    <Add/>
    <Test/>
    </>
  )
}

const css= {
  color: "blue",
  backgroundColor: "lightblue"
}

function Add(){

  return(
    <>
    <h1 style={css}>Inline styling</h1>
    <h1 className='hi'>CSS stylesheets</h1>
    <h1 style={{color: "red"}}>Inline styling</h1>
    </>
  )
}

export default App;