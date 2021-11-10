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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Card/:id" exact>
          <Workpass />
        </Route>

        <Route path="/Cards" exact>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
