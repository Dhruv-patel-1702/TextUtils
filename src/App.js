import React, { useState } from "react";
import { Navbar } from "./Componenets/Navbar";
import Textarea from "./Componenets/TextForm";
import { About } from "./Componenets/About";
import Alert from "./Componenets/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("white");
  const [mystyle, setMyStyle] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
        setAlert(null)  
    },3000)
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setMyStyle("white")
      document.body.style.backgroundColor = "#13111b";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setMyStyle("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          mode={mode}
          togglemode={togglemode}
          Style={mystyle}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textarea
                showAlert={showAlert}
                heading="Enter the text analyze below"
                mode={mode}
              />
            }
          ></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
