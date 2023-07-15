import { useState, useMemo } from "react"

function App(){
  return(
    <>
    <Add/>
    </>
  )
}

function fib(num){
  if(num === 1 || num === 2) return 1
  return fib(num-1)+fib(num-2)
}

function Add(){
  // let count= 1
  const [data, setData]= useState(1)
  const [value, setValue]= useState(1)

  function handleOnClick(){
    setData(data+1)
  }

  function handleOnClick2(){
    setValue(value * 5)
  }

  const fibValue= useMemo( () => fib(data), [data])
  return(
    <>
    <h1>{value}</h1>
    <button onClick={handleOnClick2}>add 1</button>
    <br/>
    <br/>
    <h1>{data} | {fibValue}</h1>
      <button onClick={handleOnClick}>add 2</button>
    </>
  )
}

export default App;