import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Community from "./components/Community.jsx";
import HallOfFame from "./components/HallOfFame.jsx";
import Footer from "./components/Footer.jsx";
import Workshops from "./components/Workshops.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Community />
        <Workshops />
        <HallOfFame />
      </main>
      <Footer />
    </>
  );
}

export default App;
