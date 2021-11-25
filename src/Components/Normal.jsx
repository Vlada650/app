import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

export default function Normal ({field}) {
  let fieldNumb = Math.pow(field, 2);
  const[array, setArray] = useState([]); 

  useEffect(() => {
    cycle();
 }, []);

function changeBackground(e) {
    if( e.target.style.background === 'blue') {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = 'blue';
    }
}

function cycle () {
  let newArray =[];
  for(let i = 0; i < fieldNumb; i++) {
    if(array.length > fieldNumb-1){
      break
    } else {
      newArray.push(React.createElement("div",{
        "className" : "cell",
        onMouseOver : changeBackground,
        key : shortid.generate()
      }))
    }
  }   
  setArray(newArray)
}

  return (<>
          <p>Hover a square on middle-level</p>  
          <div className='normal-mode'>{array}</div>
        </>
)}