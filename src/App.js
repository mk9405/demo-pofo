// import logo from './logo.svg';
import "./App.css";
import AboutCeo from "./component/HomePage/AboutCeo";
import CreativePeople from "./component/HomePage/CreativePeople";
import Footer from "./component/HomePage/Footer";
import Header from "./component/HomePage/Header";
import Hero from "./component/HomePage/Hero";
import NewProject from "./component/HomePage/NewProject";
import OurCorePeople from "./component/HomePage/OurCorePeople";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurCorePeople />
      <AboutCeo/>
      <CreativePeople/>
      <NewProject/>
      <Footer/>
      
    </div>
  );
}

export default App;
