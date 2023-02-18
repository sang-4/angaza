import React from "react";
import "./Home.css";
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="home">
      {/* Navigation bar */}
      <nav className='navBar'>

        <p className="about"></p>
        <Button variant="outlined" href="#outlined-buttons">
        About
        </Button>
        
        <Button variant="outlined" href="#outlined-buttons">
        Account
        </Button>

        <Button variant="outlined" href="#outlined-buttons">
        Contact
        </Button>
      </nav>

      {/* Page header */}
      <section className="mainContent">
        <section className="title">
          <h1>Angaza </h1>
          <h1> Counselling</h1>

        </section>

        <section className="info">
          <div>
            <div className="tag">
            <h2>
              “Genuine feelings cannot be produced, nor can they be eradicated…
              the body sticks to the facts.”
            </h2>
            </div>
            <br/>
            <br/>


            <div className='buttSec'>
            <div>
              <button>Appointments</button>
            </div>

            <div>
              <button>Services Offered</button>
            </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
