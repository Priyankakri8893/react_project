
function App(){
  let name= "Priyanka kumari"
  return(
    <>
      <h1>My name is {name}</h1>
      <Greet/>
    </>
  )
}

function Greet(){

  function hello(){
    alert('hello')
  }

  return(
    <>
    <h1>{5+6} Priyanka</h1>
    <button onClick={hello}>Click me</button>
    </>
  )
}


export default App; 