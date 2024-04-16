import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residency from "./components/Residency/Residency";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
// import Value from "./components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residency/>
      <Value/> 
      <Contact/>
      <GetStarted/>
    </div>
  );
}

export default App;
