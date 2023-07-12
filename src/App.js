
function App(){
  return(
    <>
    <List/>
    <Arrlist/>
    <Input/>
    </>
  )
}

function List(){
  let css= {color: 'red'}
  return(
    <ul style= {css}>
    <h2>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
    <li>nodejs</li>
    <li>reactjs</li>
    </h2>
    </ul>
  )
}

function Arrlist(){
  const list= ['mongodb', 'aws', 'auth', 'redis']

  return(
    <ul>
    <h1>list of skills</h1>
      {
        list.map( skill => <li key= {skill}>{skill}</li>)
      }
    </ul>
  )
}

function Input(){

  function handleName(event){
    console.log(event.target.value)
  }

  function handlePhone(event){
    console.log(event.target.value)
  }

  return(
    <>
    Enter your name:
    <input onChange= {handleName}/>
    <br/>
    <br/>
    Enter your phone number:
    <input onChange= {handlePhone}/>
    </>
  )
}

export default App; 