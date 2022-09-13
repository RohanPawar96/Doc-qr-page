import "./App.css";
import "./Assets/css/style.css";
import "./Assets/css/animation.css";
import Home from "./Container/Home";
import ForBalance from "./Component/For_BalancePDF_Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            strict
            element={<Home />}
            history={props.history}
          />
          <Route
            path="/For_BalancePDF"
            exact
            strict
            element={<ForBalance />}
            history={props.history}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
