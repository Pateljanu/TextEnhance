
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route
} from "react-router-dom";

function App() 
{
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'darkblue';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextEnhance" abouttext="About US" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/about" element={<About mode={mode} />} /> {/* Use element prop */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />} />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
