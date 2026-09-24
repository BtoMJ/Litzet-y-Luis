import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Invitation from "./components/Invitation/Invitation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="info">
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/:fam" element={<Invitation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
