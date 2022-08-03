import { Routes, Route } from "react-router-dom";
import AgeFail from "./components/AgeCheck/AgeFail";
import IndexPage from "./components/IndexPage/IndexPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<IndexPage />} exact/>
        <Route path='fail' element={<AgeFail />} exact/>
      </Routes>
    </div>
  );
}

export default App;
