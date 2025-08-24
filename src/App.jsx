import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="logo">Fernando García Rojas</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
