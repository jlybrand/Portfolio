import './App.css';
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Slider from './components/Slider';
import LinkNav from './components/LinkNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
      <LinkNav />
      <Footer />
    </div>
  );
}

export default App;
