
import React, { useState, useEffect } from 'react';
import './easy.css';

export default function Easy ({modes}) {
  const field = modes['easyMode']['field']
  let fieldNumb = field*field;
function changeBackground(e) {
    if( e.target.style.background === 'blue') {
      e.target.style.background = 'yellow';
    } else {
      e.target.style.background = 'blue';
    }
  }
    
const[array] = useState([])
/*useEffect(() => {
  foo();
}, []);*/

const foo = ()  => {
  let i;
  for(i = 0; i < fieldNumb; i++) {
    array.push(React.createElement("div",{
      "className" : "cell",
    }))
  }
}
console.log(fieldNumb)

console.log(array.length)

  return (<>
    <button onClick={foo}>hello</button>
      <div  className='easy-mode'>y
        {
      array.map((i) => {
         return <div className="cell" onMouseOver={changeBackground} key={i}></div>
          })
        }
   
  </div>
</>
  )}