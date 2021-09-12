import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("enable Dark Mode");




  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #291a38';
      alertstats("Dark mode is enabled", "success");
      setText("Enable light mode");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alertstats("Light mode is enabled", "success");
      setText("Enable Dark mode");
    }
  }

  const alertstats = (message, type) => {

    setAlert({
      msg: message,
      Type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  return (
    <>

      {/* <Router> */}
        <Navbar title="TextTiles" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <TextForm heading="Enter the text here" mode={mode}/>
        <About/>
        <div className="containre my-3">
        </div>
          {/* <Switch>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/"> //exact path can be used here.
             
            </Route>
          </Switch> */}
       
      {/* </Router> */}
      {/* always put router outside the syntex. */}
    </>
  );

}

export default App;
