import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Navigation bar */}
      <nav className='navBar'>

        <p className="about">About</p>
        <p className="signup">Account</p>
        <p className="contact">Contact</p>
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

          {/* Call-to-action buttons */}

        </section>
      </section>

      {/* Rest of the page content goes here */}
    </div>
  );
}

export default Home;
