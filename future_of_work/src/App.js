import "./App.css";
import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Tribe from "./components/tribe/Tribe";
import Thankyou from "./components/thankyou/Thankyou";
import Card from "./components/Card/Card";
import Workpass from "./components/workpass/Workpass";
import Worklyf from "./components/worklyf/Worklyf";
import Slider from "./components/Slider/Slider";
import Team from "./components/team/Team";
import BottomNav from "./components/bottom-nav/BottomNav";

import Data from "./data.json";

function App() {
  const [workPass, setworkPass] = useState(Data);

  return (
    <div className="App">
      {/* <Slider />
      <br></br>
      <Worklyf />
      <br></br>
      <Menu />
      <br></br>
      <Tribe />
      <br></br> */}

      {/* <Card />
      <br></br> */}
      {/* 
      <Thankyou />
      <br></br>
      <Team /> */}

      <BottomNav />
      <br></br>
      <div className="data">
        {workPass.map(
          (el) => (
            (<Card key={el.title} data={el} />),
            (<Workpass key={el.title} data={el} />)
          )
        )}
      </div>

      {/* <Switch>
        <Route path="/Workpass/:id">
          <Workpass />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
