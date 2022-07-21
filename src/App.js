
import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import Particles from "./components/Particles";
import Header from './screens/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';

function App() {


  return (
    <div className="App">
      <Navigation />
      <Header />
     {/* <Particles /> */}
     <AboutMe />
     <Technologies />
    </div>
  );
}

export default App;
