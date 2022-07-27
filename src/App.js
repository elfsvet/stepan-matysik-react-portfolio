
import './App.css';
import Navigation from './components/navigationBar/NavigationBar'
import Particles from "./components/Particles";
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactMe/ContactMe';

function App() {


  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles id='tsparticles'/>
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
