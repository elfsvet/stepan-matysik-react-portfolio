
import './App.css';
import React, { useState } from 'react';
import Navigation from './components/navigationBar/NavigationBar'
import Particles from "./components/Particles";
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactMe/ContactMe';
import ContactForm from './components/contactForm/ContactForm';
import { navigationLinks } from './helpers/navigationLinks';

function App() {
  const [categories] = useState(
    navigationLinks
  );


  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  console.log(currentCategory)

  const renderCategory = () => {
    if (currentCategory.name === 'HOME') {

      return <>
        <Header />
        <Particles id='tsparticles' />
      </>
    }
    if (currentCategory.name === 'ABOUT') {
      return <AboutMe />;
    }
    if (currentCategory.name === 'TECHNOLOGIES') {
      return <Technologies />;
    }
    if (currentCategory.name === 'PORTFOLIO') {
      return <Portfolio />;
    }
    return <ContactForm />;
  };


  // handler takes a Category parameter and changes the current Category to this Category

  const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <div className="App">
      <Navigation
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {renderCategory()}
      <ContactMe />
    </div>
  );
}

export default App;
