import React, { useState } from 'react';
import shortid from 'shortid';

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

  return (<><p>Hover a square on easy-level</p>  
        {(() => {
              for(let i = 0; i < fieldNumb; i++) {
                if(array.length > fieldNumb-1){
                  break
                } else {
                array.push(React.createElement("div",{
                  "className" : "cell",
                  onMouseOver : changeBackground,
                  key : shortid.generate()
                }))}
              }
                return <div className='easy-mode'>{array}</div>
           })()}
  </>
)}