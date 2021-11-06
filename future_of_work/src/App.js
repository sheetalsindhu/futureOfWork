import "./App.css";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Tribe from "./components/tribe/Tribe";
import Thankyou from "./components/thankyou/Thankyou";
import Card from "./components/Card/Card";

import Data from "./data.json";

function App() {
  const [workPass, setworkPass] = useState(Data);

  return (
    <div className="App">
      <div className="data">
        {workPass.map((el) => (
          <Card key={el.title} data={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
