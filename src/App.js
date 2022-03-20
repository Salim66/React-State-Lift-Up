import React, { useState } from 'react';
import './App.css';
import Data from './Components/Data';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

function App() {

  const [msg, setMsg] = useState();

  let handleInputValue = (e) => {
      setMsg(e.target.value)
  }

  return (
    <>
      <Data msg={msg} handleInputValue={handleInputValue}></Data>
      <Page1 msg={msg}></Page1>
      <Page2 msg={msg}></Page2>
      <Page3 msg={msg} handleInputValue={handleInputValue}></Page3>
    </>
  );
}

export default App;
