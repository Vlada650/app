import React, { useState, useEffect } from 'react'
import shortid from 'shortid';

function createDivs({ fieldNumb, onChangeBackground }) {
  let newArray = [];

  for (let i = 0; i < fieldNumb; i++) {
    newArray.push(React.createElement("div", {
      "className": "cell",
      onMouseOver: onChangeBackground,
      key: shortid.generate()
    }))
  }
  return newArray;
}

export default function SquareField({ field }) {

  const fieldNumb = Math.pow(field, 2);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(createDivs({ fieldNumb, onChangeBackground }));
  }, []);

  function onChangeBackground(e) {
    if (e.target.style.background === 'blue') {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = 'blue';
    }
  };

  return (
    <>
      <p>Hover a square!</p>
      <div className='square' style={{ gridTemplateColumns: `repeat(${field}, 1fr)` }}>{array}</div>
    </>
  )
}