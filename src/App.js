import React, {useEffect, useState} from 'react';
import './App.css';
import Component from './Components/Component';

function App() {

  //const [modes, setModes] = useState([]);
  /*useEffect(() => {
    loadModes();
 }, []);

  const loadModes = () => {
    fetch('http://demo1030918.mockable.io/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Что-то пошло не так');
            }
        })
        .then(response => {
          setModes(response);
        })
        .catch(console.log('error'));
      }

      //console.log(JSON.parse(modes)) */
  return (
  <Component />
  );
}

export default App;
