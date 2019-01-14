import React, { Component } from 'react';
import './FyloGrid.css';

import logo from './assets/images/logo.svg';
import img1 from './assets/images/illustration-hero.svg';
import img2 from './assets/images/illustration-features.svg';
import email from './assets/images/icon-email.svg';
import phone from './assets/images/icon-phone.svg';

class FyloGrid extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <main id="fylo-grid">

        <section className="flex-column razor-blade-gradient">
          <header>
            <img className="" src={logo} alt="fylo-logo"/>
            <div className="header-options">
              <label className="flex-centered color-white">Sign In</label>
              <button>Sign Up</button>
            </div>
          </header>
          <div className="flex-row flex-row-to-column">
            <div className="flex-1 flex-column responsive-position-2 responsive-center-align">
              <h1 className="color-white">All your files in one secure location, accessible anywhere.</h1>
              <button style={{"width":"14rem","height":"3rem"}}>Get Started</button>
            </div>
            <img src={img1} alt="hero" className="keep-aspect-ratio flex-1 responsive-position-1">
            </img>
          </div>
        </section>


        <section id="XXX"className="flex-column razor-blade">
          <h1 className="color-vdarkb text-center" style={{"margin":"3rem 0rem 5rem 0rem"}}>Stay Productive, Wherever You Are.</h1>
          <div className="flex-row flex-row-to-column">
            <div className="flex-1 flex-centered" style={{"padding":"2rem"}}>
              <img className="keep-aspect-ratio" src={img2} alt="fylo-logo"/>
            </div>
            <div className="flex-column flex-2" style={{"marginBottom":"2rem"}}>
              <div className="flex-row flex-row-to-column">
                <div className="padding-for-grid">
                  <h2 className="color-vdarkb">All platforms, all devices, all your files</h2>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="padding-for-grid">
                  <h2 className="color-vdarkb">Security you can trust</h2>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div>
              <div className="flex-row flex-row-to-column">
                <div className="padding-for-grid">
                  <h2 className="color-vdarkb">Real-time collaboration</h2>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="padding-for-grid">
                  <h2 className="color-vdarkb">Automatic Backups</h2>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-centered twenty-percent-padding" style={{"flexDirection":"column","textAlign":"center","marginBottom":"3rem"}}>
            <h1 className="color-vdarkb">Get Early Access Today.</h1>
            <p className="color-darkb">It only takes a minute to sign up and our free starter tree is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div id="get-started-form" className="flex-row flex-row-to-column">
              <input placeholder="email@example.com" />
              <button>Join</button>
            </div>
          </div>
        </section>


        
        <footer className="flex-row" style={{"paddingTop":"6rem"}}>
          <div className="flex-row flex-row-to-column footer-options flex-1">
            <ul className="flex-column flex-start flex-1">
              <li><img src={logo}  style={{"marginRight":"5px"}} className="turn-white" alt="fylo-logo" /></li>
              <li><img src={phone} style={{"marginRight":"5px"}} className="icon" alt="phone"/>Phone: +1-543-123-4567</li>
              <li><img src={email} style={{"marginRight":"5px"}} className="icon" alt="email"/>Email: example@fylo.com</li>
            </ul>
            <div className="flex-row flex-2 white-separations flex-row-to-column">
              <ul className="flex-column flex-start">
                <li><b>Fylo</b></li>
                <li>Desktop App</li>
                <li>Mobile App</li>
                <li>Pricing</li>
                <li>Feature</li>
              </ul>
              <ul className="flex-column flex-start">
                <li><b>Company</b></li>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
              <ul className="flex-column flex-start">
                <li><b>Support</b></li>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="flex-column flex-2 flex-end flex-start" style={{"paddingLeft":"2rem"}}>
              <p>Receive updates from us, including tips and tricks on how to improve your workflow.</p>
              <input style={{"width":"100%","height":"2rem","marginBottom":"1rem","boxSizing":"border-box"}} />
              <button style={{"width":"10rem"}}>Join</button>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}
export default FyloGrid;