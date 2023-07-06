import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App-header">
      <Calculator/>
    </div>
  );
}

function Calculator() {
  const [result, setResult] = useState('');

  return (
     <>
        <div className='calculator'>
           <Result value={result} />
           <Result value={result} />
           <Keyarea setResult={setResult} />
        </div>
     </>
  );
}

function Result({ value }) {
   return (
      <>
         <div className='result'>
            {value}
         </div>
      </>
   )
}
function Keyarea({ setResult }) {
  const handleKeyClick = (value) => {
     setResult(value);
  };

  return (
     <>
        <div className='keyarea'>
           <Keybox add={0} onClick={handleKeyClick} />
           <Keybox add={4} onClick={handleKeyClick} />
           <Keybox add={8} onClick={handleKeyClick} />
           <Keybox add={12} onClick={handleKeyClick} />
           <Keybox add={16} onClick={handleKeyClick} />
        </div>
     </>
  );
}

function Keybox({ add, onClick }) {
   return (
      <>
         <div className='keybox'>
            <Key num={1 + add} onClick={onClick} />
            <Key num={2 + add} onClick={onClick} />
            <Key num={3 + add} onClick={onClick} />
            <Key num={4 + add} onClick={onClick} />
         </div>
      </>
   )
}

function Key({ num, onClick }) {
   const handleClick = () => {
      onClick(num);
   };

   return (
      <>
         <div className='key' onClick={handleClick}>
            {num}
         </div>
      </>
   )
}


export default App;

