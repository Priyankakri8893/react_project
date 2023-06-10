import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

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

ReactDOM.render(
    <>
    <div>
    <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>,
    document.getElementById('root')
)