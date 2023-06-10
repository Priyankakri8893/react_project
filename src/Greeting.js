import React from 'react';
import './Greeting.css'

let curDate= new Date()
curDate= curDate.getHours()

let greeting= ""
let cssStyle= {}

if (curDate >=12 && curDate < 16) {
    greeting= "Good Afternoon";
    cssStyle.color= "yellow";
}else if (curDate >= 16 && curDate < 20) {
    greeting= "Good Evening";
    cssStyle.color= "skyBlue";
}else if (curDate >= 20 && curDate < 24) {
    greeting= "Good Night";
    cssStyle.color= "black";
}else {
    greeting= "Good Morning";
    cssStyle.color= "green";
}

function Greeting(){
    return (
        <>
      <div>
        <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      </div>
    </>
    )
}

export default Greeting;