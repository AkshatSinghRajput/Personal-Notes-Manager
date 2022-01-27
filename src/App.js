import { useState } from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Field from "./Components/Field";
import Navbar from "./Components/Navbar";
function App() {
  let [mode, setMode] = useState("light");
  let toggleHandler = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "Black";
      showAlert("Dark Mode Enabled", "success");
    }
  };
  let [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <Router>
      <div className="App">
        <Navbar name="Navbar" mode={mode} toggleHandler={toggleHandler} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route
            exact
            path='/'
            element={
              <Field
                text="Hello Text Label"
                mode={mode}
                showAlert={showAlert}
              ></Field>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
