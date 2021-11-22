import React from 'react';
import './App.css';
import Component from './Components/Component';

function App() {

  /*const [modes, setModes] = useState([]);
  const [isFetching, setFething]  = useState(false);
  useEffect(() => {
    loadModes();
 }, []);

    function loadModes () {
      setFething(true)
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
                throw new Error('Something went wrong');
            }
        })
        .then(response => {
          setModes(response);
          setFething(false)
        })
        .catch('error');
      } 
      
      if (isFetching) {
        return <p>Loading... Please, wait</p>
      } */   

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

    return ( 
      <Component modes={modes} />
    );
        
}

export default App;
