import React, { useState } from 'react';
import '../styles/Component.css';
import Easy from './Easy'
import Normal from './Normal'
import Hard from './Hard'

const Component = ({ modes }) => {

  const [val, setValue] = useState('Choose your mode');
  const [elem, showElem] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (<>
    <section className='settings'>
      <p>Let's start!</p>
      <select onChange={handleChange} value={val}>
        <option value="Choose your mode" disabled hidden>Choose your mode</option>
        <option value='easyMode'>easyMode</option>
        <option value='normalMode'>normalMode</option>
        <option value='hardMode' >hardMode</option>
      </select>
      <button onClick={() => showElem(true)}>Start</button>
    </section>
    {elem && <section className="main">
      {val === 'easyMode' && <Easy field={modes['easyMode']['field']} />}
      {val === 'normalMode' && <Normal field={modes['normalMode']['field']} />}
      {val === 'hardMode' && <Hard field={modes['hardMode']['field']} />}
    </section>}
  </>
  );
}

export default Component;