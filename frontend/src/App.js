import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Missing from "./components/Missing";
import Found from "./components/Found";
import Volunteer from "./components/Volunteer";
// import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/missing" element={<Missing />} />
          <Route path="/found" element={<Found />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
