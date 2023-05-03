import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ShopOne from "./pages/ShopOne";
import ShopTwo from "./pages/ShopTwo";
import StationOne from "./pages/StationOne";
import StationTwo from "./pages/StationTwo";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/stationOne" element={<StationOne />} />
        <Route path="/stationTwo" element={<StationTwo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shopOne" element={<ShopOne />} />
        <Route path="/shopTwo" element={<ShopTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
