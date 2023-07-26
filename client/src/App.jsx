import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
