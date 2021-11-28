import React, { useEffect, useState } from 'react';
import shortid from 'shortid';

function cycle({ fieldNumb, changeBackground }) {
  let newArray = [];

  for (let i = 0; i < fieldNumb; i++) {
    newArray.push(React.createElement("div", {
      "className": "cell",
      onMouseOver: changeBackground,
      key: shortid.generate()
    }))
  }
  return newArray;
}

export default function Easy({ field }) {
  let fieldNumb = Math.pow(field, 2);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(cycle({ fieldNumb, changeBackground }));
  }, []);

  function changeBackground(e) {
    if (e.target.style.background === 'blue') {
      e.target.style.background = 'white';
    } else {
      e.target.style.background = 'blue';
    }
  }

  return (<>
    <p>Hover a square on easy-level</p>
    <div className='easy-mode'>{array}</div>
  </>
  )
}