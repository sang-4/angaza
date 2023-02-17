import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Navigation bar */}
      <nav>
        <p className="about">About</p>
        <p className="signup">Account</p>
        <p className="contact">Contact</p>
      </nav>
      
      {/* Page header */}
      <header>
        <h1 className="title">Angaza Counselling</h1>
        <h2 className="tag">“Genuine feelings cannot be produced, nor can they be eradicated… the body sticks to the facts.”</h2>
      </header>
      
      {/* Call-to-action buttons */}
      <div className="home_cta1">
        <button>Appointments</button>
      </div>
      <div className="home_cta2">
      <button>Services Offered</button>
      </div>
      
      {/* Rest of the page content goes here */}
    </div>
  );
}

export default Home;
