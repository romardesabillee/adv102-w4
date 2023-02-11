import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Navbar from "./components/Navbar";
import Page404 from "./pages/404";

function App() {

  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/*" element={<Page404/>} />
    </Routes>
  )
}

export default App;
