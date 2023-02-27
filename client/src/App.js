import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Blog from "./Blog";
import Article from "./Article";
import Testimonial from "./Testimonial";
import Project from "./Project";
import Contact from "./Contact";
import Socials from "./Socials";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Blog />
        <Article />
        <Testimonial />
        <Project />
        <Contact />
        <Socials />
        <Footer /> */}
      </Routes>
    </div>
  );
}
