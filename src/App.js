// using ES6 modules
import { BrowserRouter as Router } from "react-router-dom";
import About from "./component/About";
import GetInTouch from "./component/contact";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Navbar from "./component/Navbar";
import Work from "./component/work";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <GetInTouch />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
