import React, { Component } from 'react';
import './FyloDark.css';

import logo from './assets/images/logo.svg';
import poster from './assets/images/illustration-intro.png';
import poster2 from './assets/images/illustration-stay-productive.png';

import phone from './assets/images/icon-phone.svg';
import location from './assets/images/icon-location.svg';
import email from './assets/images/icon-email.svg';
import arrow from './assets/images/icon-arrow.svg';
import quotes from './assets/images/bg-quotes.png';

import icon1 from './assets/images/icon-security.svg';
import icon2 from './assets/images/icon-collaboration.svg';
import icon3 from './assets/images/icon-any-file.svg';
import icon4 from './assets/images/icon-access-anywhere.svg';

import testimonial1 from './assets/images/profile-1.jpg';
import testimonial2 from './assets/images/profile-2.jpg';
import testimonial3 from './assets/images/profile-3.jpg';

class FyloDark extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main id="fylo-dark">
        <header className="flex-row">
          <img className="logo-size" src={logo} alt="fylo-logo"/>
          <ul className="flex-row header-options">
            <li>Features</li> 
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </header>

        <section className="flex-column flex-centered text-center poster-spacing">
          <img src={poster} alt="poster" className="keep-aspect-ratio" style={{"marginBottom":"2rem"}}/>
          <h1 style={{"marginBottom":"2rem"}}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p style={{"marginBottom":"2rem"}}>
            Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button>Get Started!</button>
        </section>

        <section className="flex-column just-center text-center">
          <div className="flex-row flex-row-to-column flex-centered grid-row">
            <div className="flex-column flex-1 just-center">
              <img alt="icon-img" src={icon4} className="keep-aspect-ratio" style={{"marginBottom":"1rem"}} />
              <h2>
                Access your files, anywhere.
              </h2>
              <p>
                The ability to use a smartphone, tabler or computer to access your account means your files follow you everywhere.
              </p>
            </div>
            <div className="flex-column flex-1 just-center">
              <img alt="icon-img" src={icon1} className="keep-aspect-ratio" style={{"marginBottom":"1rem"}} />
              <h2>
                Security you can trust.
              </h2>
              <p>
                2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
              </p>
            </div>
          </div>
          <div className="flex-row flex-row-to-column flex-centered grid-row">
            <div className="flex-column flex-1 just-center">
              <img alt="icon-img" src={icon2} className="keep-aspect-ratio" style={{"marginBottom":"1rem"}} />
              <h2>
               Real-time collaboration.
              </h2>
              <p>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
              </p>
            </div>
            <div className="flex-column flex-1 just-center">
              <img alt="icon-img" src={icon3} className="keep-aspect-ratio" style={{"marginBottom":"1rem"}} />
              <h2>
                Store any type of file.
              </h2>
              <p>
                Whether you're sharing holidays photos or work documents. Fylo has you covered allowing for all file types to be securely stored and shared.
              </p>
            </div>
          </div>
        </section>

        <section className="flex-row flex-row-to-column">
          <div className="flex-1 flex-centered">
            <img src={poster2} alt="poster-img" className="keep-aspect-ratio"/>
          </div>
          <div className="flex-column flex-1">
            <h1 className="spacing responsive-text-center">Stay productive, wherever you are</h1>
            <p className="spacing">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className="spacing">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div className="flex spacing">
              <span className="color-cyan how-it-works">See how Fylo works</span>
              <img src={arrow} style={{"marginLeft":"5px"}} className="icon" alt="arrow" />
            </div>
          </div>
        </section>

        <section className="flex-row flex-row-to-column">
          <img src={quotes} alt="quotation" className="quotes"/>
            <div className="flex-column testimonials">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="flex" style={{"height":"3rem","marginTop":"1rem"}}>
              <img src={testimonial1} alt="testimonials" className="testimonial-avatar"/>
              <div className="flex-column">
                <b>Satish Patel</b>
                <small>Founder & CEO, Huddle</small>
              </div>
            </div>
          </div>
          <div className="flex-column testimonials">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="flex" style={{"height":"3rem","marginTop":"1rem"}}>
              <img src={testimonial2} alt="testimonials" className="testimonial-avatar"/>
              <div className="flex-column">
                <b>Bruce McKenzie</b>
                <small>Tech Leader, TechCompany</small>
              </div>
            </div>
          </div>
          <div className="flex-column testimonials">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="flex" style={{"height":"3rem","marginTop":"1rem"}}>
              <img src={testimonial3} alt="testimonials" className="testimonial-avatar"/>
              <div className="flex-column">
                <b>Iva Boyd</b>
                <small>CFO, Google Competitor</small>
              </div>
            </div>
          </div>
        </section>

        <section id="early-access" className="flex-row text-center">
          <div className="flex-column">
            <h1>Get early access today!</h1>
            <p>
              It only takes a minute to sign up and our free starter tier is extremely generous. 
              <br></br>
              If you have any questions, our support team would be happy to help you.
            </p>
            <div id="early-access-form" className="flex-row just-center flex-row-to-column">
              <input  className="flex-2" placeholder="example@email.com"></input>
              <button className="flex-1">Get started for free</button>
            </div>
          </div>
        </section>

        <footer className="flex-column flex-row-to-column">
          <li>
            <img src={logo} className="turn-white responsive-logo-size" alt="fylo-logo" />
          </li>
          <div className="flex-row flex-row-to-column">
            <ul className="flex-column flex-start flex-1">
              <li>
                <img src={location} style={{"marginRight":"1rem"}} className="location-icon" alt="location"/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
            </ul>
            <ul className="flex-column flex-start flex-1">
              <li><img src={phone} style={{"marginRight":"1rem"}} className="icon" alt="phone"/>Phone: +1-543-123-4567</li>
              <li><img src={email} style={{"marginRight":"1rem"}} className="icon" alt="email"/>Email: example@fylo.com</li>
            </ul>
            <ul id="footer-options" className="flex-column flex-start flex-1">     
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul id="footer-options" className="flex-column flex-start flex-1 last-child">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
            <ul className="flex-row flex-start footer-icons flex-1 responsive-center">
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
export default FyloDark;