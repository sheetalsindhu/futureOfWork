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
import Jobs from "./components/Jobs/Jobs";
import Learn from "./components/learn/Learn";

import { Payment } from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/jobs" exact>
          <Jobs />
        </Route>

        <Route path="/learn" exact>
          <Learn />
        </Route>

        <Route path="/payment" exact>
          <Payment />
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
