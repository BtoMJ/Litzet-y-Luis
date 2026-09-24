import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Invitation from "./components/Invitation/Invitation";
// import Second from "./components/Second/Second";
// import Third from "./components/Third/Third";
// import Music from "./components/Music/Music";
// import Carrusel from "./components/Carrusel/Carrusel";

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
    // <div className="container">
    //   <div className="info">
    //     <Music />
    //     <Home />
    //     <Second />
    //     <Third />
    //     <Carrusel />
    //   </div>
    // </div>
  );
}

export default App;
