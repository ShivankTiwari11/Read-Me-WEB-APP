// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setdarkMode] = useState("light") // this is the state variable for controling the dark mode.
  const handleDarkMode = () => {
    if (darkMode === 'light') {
      setdarkMode('dark')
      document.body.style.backgroundColor='#01203f'
    } else {
      setdarkMode('light')
      document.body.style.backgroundColor='white'

    }
  }

  return (

    <div className="App" >

      <Navbar title="TextUtils" mode={darkMode} toggleMode={handleDarkMode} />
      <div className="container my-3">

        <TextForm heading="Enter the text to analyze" mode={darkMode}/>
      </div>
    </div>
  );
}

export default App;