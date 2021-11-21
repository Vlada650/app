import React,{ useState} from 'react';
import './Component.css';
import Easy from './easy'

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
    console.log(val)
  }

  /*const pickMode = () =>{
    debugger
    /*if ( val === 'easyMode'){ 
      return <Easy modes={modes}/>
    }*/
  

  return ( <>
   <section className='settings'>
    <select  onChange={handleChange} value={val}>
    <option value="Choose your mode" disabled hidden>Choose your mode</option>
    <option name='easyMode' value='easyMode'>easyMode</option>
    <option name='normalMode' value='normalMode'>normalMode</option>
    <option name='hardMode' value='hardMode' >hardMode</option>
   </select>
   <button className='' >Start</button>
   </section>
   <section className="sec">

    
   {/*modes.map((modes) => {defaultValue={'default'} 
                        return (
                            <div>{easyMode} : {field}</div>)
                    })}
                    {easyMode && <Easy />}
                    {normalMode && <Normal />}
                    {hardMode && <Hard />}
  */}
  </section>

    </>
  );
}


export default Component;