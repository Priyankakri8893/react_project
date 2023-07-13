import { useState, useRef, useEffect } from "react"

function App(){
  return(
    <>
    <Timer/>
    <Add/>
    <Hook/>
    
    </>
  )
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

function Add(){
  // let count= 1
  const [data, setData]= useState(1)
  const [value, setValue]= useState('hello')
  const peristCount= useRef(1)

  function handleOnClick(){
    setData(data+1)
    // count= count+1
    // console.log(count)
    peristCount.current= peristCount.current + 1
  }

  function hello(){
    setValue(value+'hello')
  }
  return(
    <>
    <h1>{data}</h1>
    <h1>{peristCount.current}</h1>
    {/* <p>{count}</p> */}
      <button onClick={handleOnClick}>add 1</button>
      <h2>{value}</h2>
      <button onClick={hello}>add 2</button>
    </>
  )
}


function Hook(){
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <br/>
    <br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;