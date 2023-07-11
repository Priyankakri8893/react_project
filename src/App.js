
function App(){
  let name= "Priyanka kumari"
  let age= 23
  return(
    <>
      <h1>My name is {name}</h1>
      <Greet naam= {name} age= {age}/>
    </>
  )
}

function Age(props){
  return(
    <>
      <h2>My sister age is {props.age}</h2>
    </>
  )
}

function Alertbuttom({message, children}){
  return(
    <>
      <h1>{message}</h1>
      <h1>{children}</h1>
    </>
  )
}

function Greet(props){

  function hello(){
    console.log('hello')
  }

  return(
    <>
    <Alertbuttom message='How are you'/>
    <Alertbuttom children='I am fine'/>

    <Alertbuttom>What is your name</Alertbuttom>
    <br/>
    <br/>

      <h2>hello {props.naam}, how are you?</h2>
      <h2>My age is {props.age}</h2>
      <Age age= {props.age}/>
      <br/>
      <button onClick={hello}>Click me</button>
    </>
  )
}


export default App; 