import "./App.css";
import Overview from "./pages/Overview";
import { Three } from "./pages/Three";
import { Two } from "./pages/Two";
import { Zero } from "./pages/Zero";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/kapitel_2" element={<Two/>} />
        <Route path="/kapitel_3" element={<Three />} />
      </Routes>
    </div>
  );
}

export default App;
