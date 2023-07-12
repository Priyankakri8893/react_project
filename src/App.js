import { useState } from "react"

function App(){
  return(
    <>
    <Add/>
    </>
  )
}


function Add(){
  // let count= 1
  const [data, setData]= useState(1)
  const [value, setValue]= useState('hello')

  function handleOnClick(){
    setData(data+1)
    // count= count+1
    // console.log(count)
  }

  function hello(){
    setValue(value+'hello')
  }
  return(
    <>
    <h1>{data}</h1>
    {/* <p>{count}</p> */}
      <button onClick={handleOnClick}>add 1</button>
      <h2>{value}</h2>
      <button onClick={hello}>add 2</button>
    </>
  )
}

export default App;