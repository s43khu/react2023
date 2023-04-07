import "./app.scss"
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="main-container">
      <Navbar/>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
    </div>
    
  );
}

export default App;