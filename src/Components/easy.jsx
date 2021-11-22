import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

export default function Easy ({field}) {
 let fieldNumb = Math.pow(field, 2);
 const[array] = useState([]); 
 
   useEffect(() => {
    foo();
  }, []);

const foo = ()  => {
  for(let i = 0; i < fieldNumb; i++) {
    if(array.length > fieldNumb-1){
      break
    } else {
    array.push(React.createElement("div",{
      "className" : "cell"
    }))}
  }
}  

function changeBackground(e) {
    if( e.target.style.background === 'blue') {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = 'blue';
    }
  }

  return (<><div>Hover a square on easy-level</div>  
        <div  className='easy-mode'>
        {
          array.map(() => {
            return <div className="cell" onMouseOver={changeBackground} key={shortid.generate()}></div>
          })}
        </div>
  </>

)}