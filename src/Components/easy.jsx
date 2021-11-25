import React, { useEffect, useState } from 'react';
import shortid from 'shortid';

export default function Easy ({field}) {
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
          <p>Hover a square on easy-level</p>  
          <div className='easy-mode'>{array}</div>
        </>
)}