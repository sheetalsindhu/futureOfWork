import "./App.css";
import Card from "./components/Card/Card";
import BottomNav from "./components/bottom-nav/BottomNav";
import Menu from "./components/menu/Menu";

const workCard = {
  title: "WORK",
  subtitle: "from any corner of the world",
  image:
    "https://img.jakpost.net/c/2020/03/14/2020_03_14_89218_1584158212._large.jpg",
  color: "#E5265A",
};

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
