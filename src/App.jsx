import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Community from "./components/Community.jsx";
import HallOfFame from "./components/HallOfFame.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Community />
        <HallOfFame />
      </main>
      <Footer />
    </>
  );
}

export default App;
