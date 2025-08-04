import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ScrollNav from "./components/ScrollNav";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

function App() {

  return (
    <>
    <CustomCursor />
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
