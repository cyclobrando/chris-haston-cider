import { Routes, Route } from "react-router-dom";
import AgeCheck from "./components/AgeCheck/AgeCheck";
import AgeFail from "./components/AgeCheck/AgeFail";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import NavBar from "./components/HeaderBar/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AgeCheck />} exact/>
        <Route path='fail' element={<AgeFail />} exact/>
        <Route path='header' element={<HeaderBar />} exact/>
        <Route path='nav' element={<NavBar />} exact/>
      </Routes>
    </div>
  );
}

export default App;
