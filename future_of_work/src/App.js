import "./App.css";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Tribe from "./components/tribe/Tribe";
import Thankyou from "./components/thankyou/Thankyou";
import Card from "./components/Card/Card";
import Workpass from "./components/workpass/Workpass";
import Worklyf from "./components/worklyf/Worklyf";
import Slider from "./components/Slider/Slider";
import Team from "./components/team/Team";
import Homepage from "./components/Homepage/Homepage";
import Learn from "./components/Learn/Learn";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/Learn">
          <Learn />
        </Route>
        <Route path="/Jobs">
          <Jobs />
        </Route>

        <Route path="/worklyf" exact>
          <Worklyf />
        </Route>
        <Route path="/card/:id" exact>
          <Workpass />
        </Route>

        <Route path="/cards" exact>
          <Card />
        </Route>

        <Route path="/tribe" exact>
          <Tribe />
        </Route>

        <Route path="/team">
          <Team />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
