import React from 'react'
import './aboutMe.css'
import stepan from '../../images/stepan.jpg'

function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
      <div>
    <img src={stepan} alt=" stepan photo"/>
      </div>
      <div className='about__text'>
        <h1>About Me</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores officia fuga maiores ex aliquam doloribus quae commodi voluptas officiis eum totam, suscipit aspernatur recusandae tenetur in culpa esse obcaecati!</p>
      </div>

    </div>
  )
}

export default AboutMe