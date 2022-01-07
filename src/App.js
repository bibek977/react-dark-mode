import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import React, { useState } from 'react'


function App() {
  const [modeName, setmodeName] = useState('night')
  const [styleColor, setstyleColor] = useState({
    backgroundColor : "black",
    color : 'white',
  })
  const clicked = ()=>{
    if(styleColor.backgroundColor=="black"){
      setmodeName("night")
      setstyleColor({
        backgroundColor : "white",
        color : 'black'
      })
      document.body.style.backgroundColor = "whiteSmoke"

    }
    else{
      setmodeName('day')
      setstyleColor({
        backgroundColor : 'black',
        color : 'white'
      })
      document.body.style.backgroundColor = "gray"
    }
  }
  return (
    <>
    <Home myStyle={styleColor} mode={modeName} clickState={clicked} />
    </>
  );
}

export default App;
