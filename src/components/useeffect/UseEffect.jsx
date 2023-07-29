// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { BiPlusMedical } from "react-icons/bi";
// import { FaMinus } from "react-icons/fa";


// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   const countUpdate = (val) => {
//     if (val === "inc") return setCount(count + 1);
//     if (val === "dec") return setCount(count - 1);
//   };

//   useEffect(() => {
//     document.title = count;
//   }, [count]);

//   return (
//     <>
//       <Wrapper>
//         <div className="container">
//           <button onClick={() => countUpdate("inc")}>
//             <BiPlusMedical className="icon" />
//           </button>
//           <h1>{count}</h1>
//           <button onClick={() => countUpdate("dec")}>
//             <FaMinus className="icon minus_icon" />
//           </button>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 4.8rem;
//   }
//   .icon {
//     font-size: 2rem;
//   }

//   h1 {
//     font-size: 5.4rem;
//     color: #2e86c1;
//   }
// `;

import { useEffect, useState } from "react";

function UseEffect(){
  const [count, setCount]= useState(0)
  const [test, setTest]= useState(0)

  function handleButton(val){
    if(val === "inc") return setCount(count+1)
    if(val === "dec"){
      if(count === 0) return setCount(0)
      else return setCount(count-1)
    }
  }

  function handletest(val){
    if(val === "inc") return setTest(test+1)
    if(val === "dec"){
      if(test === 0) return setTest(0)
      else return setTest(test-1)
    }
  }
// document.title= count
  useEffect( () => {
    document.title= count
  }, [count])

  return(
    <>
      <button onClick={() => handleButton("inc")}>incresement</button>
      <h1>{count}</h1>
      <button onClick={() => handleButton("dec")}>decreasement</button>
      <br/>
      <br/>
      <div>
      <button onClick={() => handletest("inc")}>incresement</button>
      <h1>{test}</h1>
      <button onClick={() => handletest("dec")}>decreasement</button>
      </div>
    </>
  )
}

export default UseEffect;
