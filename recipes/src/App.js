import { HomeContainer } from "./components/HomeContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="grid grid-cols-3 gap-2 bg-primary-50 h-screen">
      <div className=" bg-white">
        <NavBar />
      </div>
      <div className="col-span-2">
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
