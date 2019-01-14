import React, { Component } from 'react';
import './FyloSignUp.css';

import illustration from './assets/images/illustration-main.svg'
import logo from './assets/images/logo.svg';

class FyloSignUp extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main id="fylo-sign-up">
        <div className="justified flex1">
          <header>
            <img src={logo} alt="fylo-logo"/>
            <div className="icons">
              <i className="fab fa-facebook-f"></i> 
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </header>
          <img src={illustration} className="picture-wrapper" alt="illustration" />
        </div>

        
        

          <div className="justified flex1 bottom"> 
            <header>
              <img src={logo} alt="fylo-logo"/>
              <div className="icons">
                <i className="fab fa-facebook-f"></i> 
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </header>
            <section>
              <h1>All your files in one secure location, accessible anywhere.</h1>
              <p>Fylo stores all your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family co-workers.</p>
              <div>
                <h2>Sign up for early access</h2>
                <div className="flex"><input type="text" placeholder="email@example.com"></input><button>Sign Up</button></div>
              </div>
            </section>
            <footer>
              <span className="privacy">Privacy Policy</span>
            </footer>
          </div>
       
        
      </main>
    );
  }
}
export default FyloSignUp;