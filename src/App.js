import './App.css';
import { useState } from 'react';

function App() {
  return (
      <Calculator/>
  );
}

function Calculator() {
   const [result, setResult]= useState([])

   const clickHandler=(event)=>{
      setResult([...result, event.target.value].join(''))
   }

   const clickZero=(event)=>{
      if(result.length == 0) setResult([])
      else setResult([...result, event.target.value].join(''))
   }

   const clearScreen=()=>{
      setResult([])
   }

   const clearOne=()=>{
      setResult(result.slice(0,-1))
   }

   const calculate=()=>{
      if (result.length === 0) {
      setResult([]);
    } else {
      setResult([eval(result)]);
    }
   }
  return (
     <>
    <div className="calc">
     <input type='text' placeholder='0' id='answer' value={result}/>
     <input type='button' value="9" className='button' onClick={clickHandler}/>
     <input type='button' value="8" className='button' onClick={clickHandler}/>
     <input type='button' value="7" className='button' onClick={clickHandler}/>
     <input type='button' value="6" className='button' onClick={clickHandler}/>
     <input type='button' value="5" className='button' onClick={clickHandler}/>
     <input type='button' value="4" className='button' onClick={clickHandler}/>
     <input type='button' value="3" className='button' onClick={clickHandler}/>
     <input type='button' value="2" className='button' onClick={clickHandler}/>
     <input type='button' value="1" className='button' onClick={clickHandler}/>
     <input type='button' value="0" className='button' onClick={clickZero}/>
     <input type='button' value="." className='button' onClick={clickHandler}/>
     <input type='button' value="+" className='button' onClick={clickHandler}/>
     <input type='button' value="-" className='button' onClick={clickHandler}/>
     <input type='button' value="*" className='button' onClick={clickHandler}/>
     <input type='button' value="/" className='button' onClick={clickHandler}/>
     <input type='button' value="%" className='button' onClick={clickHandler}/>
     <input type='button' value="x" className='button button1' onClick={clearOne}/>
     <input type='button' value="C" className='button button1' onClick={clearScreen}/>
     <input type='button' value="=" className='button button1' onClick={calculate}/>
     </div>
     </>
  );
}




export default App;

