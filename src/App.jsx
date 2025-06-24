import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./App.css";
import ScrollNav from "./components/ScrollNav";

function App() {
  return (
    <>
      <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      <Footer />
      <ScrollNav />
    </>
  );
}

export default App;
