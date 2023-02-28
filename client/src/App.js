import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Blog from "./Blog";
import Article from "./Article";
import Project from "./Project";
import Contact from "./Contact";
import Socials from "./Socials";
import Footer from "./Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#2c2c2e", minHeight: "100vh" }}>
      <Navbar />
      <Header />
      <Article />
      <Blog />
      <Project />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}
