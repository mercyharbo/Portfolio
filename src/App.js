// using ES6 module
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import About from "./component/About";
import Work from "./component/work";
import GetInTouch from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <main className='container'>
        <Navbar />
        <main className='content'>
          <Hero />
          <About />
          <Work />
          <GetInTouch />
          <Footer />
        </main>
    </main>   
  );
}

export default App; 

      
    