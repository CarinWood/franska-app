import "./App.css";
import Overview from "./pages/Overview";
import { Trois } from "./pages/Trois";
import { Zero } from "./pages/Zero";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/trois" element={<Trois />} />
      </Routes>
    </div>
  );
}

export default App;
