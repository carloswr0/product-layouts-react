import React, { Component } from 'react';
import './FyloTwoColumns.css';

//Images
import logo from './assets/images/logo.svg';
import img1 from './assets/images/illustration-1.svg';
import img2 from './assets/images/illustration-2.svg';
import arrow from './assets/images/icon-arrow.svg';
import email from './assets/images/icon-email.svg';
import phone from './assets/images/icon-phone.svg';
import quotes from './assets/images/icon-quotes.svg';
import testimonial from './assets/images/avatar-testimonial.jpg';

class FyloTwoColumns extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main id="fylo-two-columns">
        <header>
          <img className="logo-size" src={logo} alt="fylo-logo"/>
          <ul className="header-options">
            <li>Features</li> 
            <li style={{"margin":"0 2rem"}}>Team</li>
            <li>Sign In</li>
          </ul>
        </header>
        <section>
          <div className="flex-column flex-1 responsive-position">
            <h1 className="color-darkb">All your files in one secure location, accessible anywhere.</h1>
            <p>Fylos stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.</p>
            <div className="flex responsive-column">
              <input className="flex-2" placeholder="Enter your email..."></input>
              <button className="flex-1" style={{"marginLeft":"1rem"}}>Get Started</button>
            </div>
          </div>
          <div className="flex-1 img-container flex-centered">
            <img src={img1} alt="illustration" className="keep-aspect-ratio"/>
          </div>
        </section>
        <section>
          <div className="flex-column flex-1 responsive-position">
            <h1 className="color-darkb">Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p><br></br>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
            <div className="flex responsive-flex-center">
              <span className="color-cyan how-it-works">See how Fylo works</span>
              <img src={arrow} style={{"marginLeft":"5px"}} className="icon" alt="arrow" />
            </div>
            <div id="testimonials" className="flex-column">
              <img src={quotes} className="icon" alt="quotes" />
              <p>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </p>
              <div className="flex" style={{"height":"3rem","marginTop":"1rem"}}>
                <img src={testimonial} alt="testimonials" className="testimonial-avatar"/>
                <div className="flex-column">
                  <b>Kyle Burton</b>
                  <small>Founder & CEO, Huddle</small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 img-container flex-centered">
            <img src={img2} alt="illustration" className="keep-aspect-ratio"/>
          </div>
        </section>
        <section id="get-started">
          <div className="flex-column flex-1">
            <h1 className="color-white">Get early access today</h1>
            <p className="color-white">It only takes a minute to sign up and our free starter is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </div>
          <div className="flex-column flex-1">
            <input className="" placeholder="email@example.com"></input>
            <button>Get Started for Free</button>
          </div>
        </section>
        <footer className="flex-column">
          <div className="flex-1" style={{"marginBottom":"2rem"}}>
            <img src={logo} alt="fylo-logo" className="turn-white logo-size"/>
          </div>
          <div className="flex-row responsive-column footer-options">
            <ul className="flex-column flex-start">
              <li><img src={phone} style={{"marginRight":"5px"}} className="icon" alt="phone"/>Phone: +1-543-123-4567</li>
              <li><img src={email} style={{"marginRight":"5px"}} className="icon" alt="email"/>Email: example@fylo.com</li>
            </ul>
            <ul className="flex-column flex-start">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul className="flex-column flex-start">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <ul className="flex-row flex-start footer-icons">
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-instagram"></i></li>
            </ul>
          </div>
        </footer>
      </main>
    );
  }
}
export default FyloTwoColumns;