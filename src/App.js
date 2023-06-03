import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
