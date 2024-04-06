import { DndProvider } from "react-dnd";
import "./App.css";
import { Four } from "./pages/Four";
import { One } from "./pages/One";
import Overview from "./pages/Overview";
import { SentencePage } from "./pages/SentencePage";
import { Three } from "./pages/Three";
import { Two } from "./pages/Two";
import { Verb } from "./pages/Verb";
import { Zero } from "./pages/Zero";

import { Route, Routes } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import Five from "./pages/Five";
import { Verbs } from "./pages/Verbs";
import Six from "./pages/Six";
import Seven from "./pages/Seven";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="app">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/kapitel_0" element={<Zero />} />
        <Route path="/kapitel_1" element={<One />} />
        <Route path="/kapitel_2" element={<Two />} />
        <Route path="/kapitel_3" element={<Three />} />
        <Route path="/kapitel_4" element={<Four/>} />
        <Route path="/kapitel_5" element={<Five/>} />
        <Route path="/kapitel_6" element={<Six/>} />
        <Route path="/kapitel_7" element={<Seven/>} />
        <Route path="/sentences" element={<SentencePage />} />
        <Route path="/verb" element={<Verb />} />
        <Route path="/verbs" element={<Verbs/>}/>
      </Routes>
    </div>
    </DndProvider>
  );
}

export default App;
