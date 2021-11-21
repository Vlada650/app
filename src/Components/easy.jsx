
import React, { useState, useEffect } from 'react';

export default function Easy ({field}) {
  let fieldNumb = Math.pow(field, 2);
  const[array] = useState([]);

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
    if(array.length > fieldNumb){
      break
    } else {
    array.push(React.createElement("div",{
      "className" : "cell",
    }))}
  }
}

  return (<>
      { array !== [] && <div  className='easy-mode'>
        {
          array.map(() => {
            return <div className="cell" onMouseOver={changeBackground} ></div>
          })}
          </div>}  
  </>

)}