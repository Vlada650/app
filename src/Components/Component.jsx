import React,{ useState} from 'react';
import './Component.css';
import Easy from './Easy'
import Normal from './Normal'
import Hard from './Hard'

const Component = () => {

  /*state = { 
    НАПИСАТЬ КАК КЛАССОВЫЙ КОМПОНЕНТ
    showBox: false
  };   handleBoxToggle = () => this.setState({ showBox: !this.state.showBox })*/
  const  modes = {
"easyMode": {
"field": 5
},
"normalMode": {
"field": 10
},
"hardMode": {
"field": 15
}}
  const [val, setValue] = useState('Choose your mode')
  
  const handleChange = (e) => {
    setValue( e.target.value);
  }

//const [coll, setColl] = useState(false)
  const pickMode = () =>{
    if (val === 'easyMode'){
      return <Easy field={modes['hardMode']['field']}/>
    }
  } 

  return ( <>
   <section className='settings'>
    <select  onChange={handleChange} value={val}>
    <option value="Choose your mode" disabled hidden>Choose your mode</option>
    <option name='easyMode' value='easyMode'>easyMode</option>
    <option name='normalMode' value='normalMode'>normalMode</option>
    <option name='hardMode' value='hardMode' >hardMode</option>
   </select>
   <button onClick={pickMode}>Start</button>
   </section>
   <section className="main"> 
     <Hard field={modes['hardMode']['field']} />
     <Easy field={modes['easyMode']['field']} />
     <Normal field={modes['normalMode']['field']}/>
   {/*modes.map((modes) => {defaultValue={'default'} 
                        return (
                            <div>{easyMode} : {field}</div>)
                    })}
                    {easyMode && }
                    {normalMode && }
                    {hardMode && <Hard />}{coll && <>{val === 'easyMode' &&}</>
  */}
  </section>
    </>
  );
}

export default Component;