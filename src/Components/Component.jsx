import React, { useState } from 'react';
import '../styles/Component.css';
import SquareField from './SquareField';

const Component = ({ modes }) => {

  const [value, setValue] = useState('default');
  const [squares, showSquares] = useState(false);
  const modesKeys = Object.keys(modes);

  const onModeChange = (e) => {
    setValue(e.target.value);
    showSquares(false);
  }

  return (<>
    <section className='select-list'>
      <p>Let's start!</p>

      <select onChange={onModeChange} value={value}>
        <option value="default" disabled hidden>Choose your mode</option>
        {modesKeys.map(mode =>
          <option value={modes[mode].field} key={mode}>{mode}</option>)
        }
      </select>
      <button onClick={() => showSquares(true)}>Start</button>
    </section>
    <section className="selected-square">{squares && <SquareField field={value} />}</section>
  </>
  );
}

export default Component;