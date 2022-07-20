import React from 'react'
import Typewriter from 'typewriter-effect';
function Header() {
  return (
    <div className="main-info">
      
      <Typewriter
  options={{
    strings: ['Hello', 'World', " ", " "],
  
    autoStart: true,
    loop: true,
  }}
/>
        Hello will you display me?
   
    </div>
  )
}

export default Header

