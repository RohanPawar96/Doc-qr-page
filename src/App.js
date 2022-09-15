import "./App.css";
import "./Assets/css/style.css";
import Home from "./Container/Home";
import ForBalance from "./Component/For_BalancePDF_Page";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <Router history={Router}>
        <Route path="/" exact strict component={Home} history={props.history} />
        <Route
          path="/for_BalancePDF"
          exact
          strict
          component={ForBalance}
          history={props.history}
        />
      </Router>
    </div>
  );
}

export default App;
