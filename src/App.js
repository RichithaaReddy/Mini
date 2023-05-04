import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/y" element={<y />} />
          <Route path="/z" element={<z />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
