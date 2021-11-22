import React, { useState, useEffect } from 'react'
import shortid from 'shortid';

export default function Hard ({field}) {
let fieldNumb = Math.pow(field, 2);
const[array] = useState([])

function changeBackground(e) {
    if( e.target.style.background === 'blue') {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = 'blue';
    }
  }
    
useEffect(() => {
  foo();
}, []);

const foo = ()  => {
  for(let i = 0; i < fieldNumb; i++) {
    if(array.length > fieldNumb-1){
      break
    } else {
    array.push(React.createElement("div",{
      "className" : "cell",
    }))}
  }
}

  return (<><div>Hover a square on hard-level</div>  
      { array !== [] && <div  className='hard-mode'>
        {
          array.map(() => {
            return <div className="cell" onMouseOver={changeBackground} key={shortid.generate()}></div>
          })}
          </div>}  
  </>

)}