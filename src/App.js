import { useState } from "react";

function App(){
  return(
    <>
      <Input/>
    </>
  )
}

function Input(){
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return(
    <>
      Number: <input type="number" value={inputValue} onChange={handleInputChange} />
      <br/>
      <br/>
      <Table inputValue={inputValue} />
    </>
  )
}

function Table({ inputValue }){
  if (inputValue === "") {
    return null;
  }
  return(
    <>
    {inputValue * 1}
    <br/>
    {inputValue * 2}
    <br/>
    {inputValue * 3}
    <br/>
    {inputValue * 4}
    <br/>
    {inputValue * 5}
    <br/>
    {inputValue * 6}
    <br/>
    {inputValue * 7}
    <br/>
    {inputValue * 8}
    <br/>
    {inputValue * 9}
    <br/>
    {inputValue * 10}
    </>
  )
}

export default App; 