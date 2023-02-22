import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import TextForm from "./TextForm";
import { useState } from "react";
import Alert from "./Alert";
// import About from "./About";
function App() {
  const [mode, setMode] = useState(`light`); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = `TextUtils - Dark Mode`;
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = `TextUtils - Light Mode`;
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route
            path="/"
            element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyze Below"
          mode={mode}
        />
        {/* }
          />{" "} */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
