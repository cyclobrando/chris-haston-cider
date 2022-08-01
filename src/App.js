import { Routes, Route } from "react-router-dom";
import AgeCheck from "./components/AgeCheck/AgeCheck";
import AgeFail from "./components/AgeCheck/AgeFail";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AgeCheck />} exact/>
        <Route path='fail' element={<AgeFail />} exact/>
      </Routes>
    </div>
  );
}

export default App;
