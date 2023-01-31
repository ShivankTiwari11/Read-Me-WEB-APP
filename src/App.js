// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [darkMode, setdarkMode] = useState("light") // this is the state variable for controling the dark mode.
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const handleDarkMode = () => {
    if (darkMode === 'light') {
      setdarkMode('dark')
      document.body.style.backgroundColor = '#01203f'
      showAlert("Dark Mode has been Enabled", "success")
    } else {
      setdarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
    }
  }

  return (

    <div className="App" >

      <Navbar title="TextUtils" mode={darkMode} toggleMode={handleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm showalert= {showAlert} alert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Copy the text " mode={darkMode} />
      </div>
    </div>
  );
}

export default App;