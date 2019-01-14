import React, { Component } from 'react';
import './FyloIntegrations.css';

import logo from './assets/images/logo.svg';
import img1 from './assets/images/illustration-main.svg';

import phone from './assets/images/icon-phone.svg';
import email from './assets/images/icon-email.svg';

import img2 from './assets/images/icon-devices.svg';
import img3 from './assets/images/icon-collaboration.svg';
import img4 from './assets/images/icon-security.svg';

import logo1 from './assets/images/logo-asana.png';
import logo2 from './assets/images/logo-gsuite.png';
import logo3 from './assets/images/logo-salesforce.png';
import logo4 from './assets/images/logo-trello.png';
import logo5 from './assets/images/logo-slack.png';
import logo6 from './assets/images/logo-typeform.png';


class FyloIntegrations extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main id="fylo-integrations">
        <section className="flex-column">
          <header>
            <img className="" src={logo} alt="fylo-logo"/>
            <div className="header-options">
              <label className="flex-centered color-white">Sign In</label>
              <button>Sign Up</button>
            </div>
          </header>
          <div className="flex-row flex-row-to-column">
            <div className="flex-1 flex-column responsive-position-2 responsive-center-align">
              <h1 className="">All your files in one secure location, accessible anywhere.</h1>
              <p className="color-gray responsive-bottom-spacing">Fylo stores all your most important files in one secure location, access them whenever you need, share and collaborate with friends, family and co-workers.</p>
              <button style={{"width":"14rem","height":"3rem"}}>Get Started</button>
            </div>
            <img src={img1} alt="hero" className="keep-aspect-ratio flex-1 responsive-position-1 responsive-bottom-more-spacing">
            </img>
          </div>
        </section>
        <section className="flex-column">
          <div className="flex-column flex-centered" style={{"marginBottom":"4rem"}}>
            <h1 className="color-darkb">Stay productive, wherever you are.</h1>
            <p className="color-gray" style={{"textAlign":"center"}}>
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            </p>
          </div>
          <div className="flex-row flex-row-to-column" style={{"margin":"0 10%"}}>
            <div className="flex-column responsive-center-align">
              <img className="keep-aspect-ratio responsive-bottom-spacing" src={img2} alt="icons" />
              <b className="responsive-bottom-more-spacing text-center" style={{"marginTop":"1rem"}}>All platforms, all devices, all your files.</b>
            </div>
            <div className="flex-column responsive-center-align">
              <img className="keep-aspect-ratio responsive-bottom-spacing" src={img4} alt="icons" />
              <b className="responsive-bottom-more-spacing text-center" style={{"marginTop":"1rem"}}>Security you can trust.</b>
            </div>
            <div className="flex-column responsive-center-align">
              <img className="keep-aspect-ratio responsive-bottom-spacing" src={img3} alt="icons" />
              <b className="responsive-bottom-more-spacing text-center" style={{"marginTop":"1rem"}}>Real-time collaboration.</b>
            </div>
          </div>
        </section>
        <section className="flex-row flex-row-to-column">
          <div className="flex-column" style={{"padding": "0 1rem"}}>
            <h1 className="color-darkb">Connect with the apps you use everyday</h1>
            <p className="color-gray responsive-bottom-spacing">Fylo seamlessly integrates with hundres of apps, meaning you can access and work on your files from the apps you already know and love.</p>
          </div>
          <div id="vendors-container" className="flex-column">
            <div className="flex-row flex-row-to-column responsive-center-align">
              <div className="flex-column vendor-card responsive-bottom-spacing">
                <div className="flex-column vendor-icon-container">
                  <img src={logo1} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">Asana</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
              <div className="flex-column vendor-card responsive-bottom-spacing relative-card">
                <div className="flex-column vendor-icon-container">
                  <img src={logo2} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">GSuite</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
              <div className="flex-column vendor-card responsive-bottom-spacing">
                <div className="flex-column vendor-icon-container">
                  <img src={logo3} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">Salesforce</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
            </div>
            <div className="flex-row flex-row-to-column responsive-center-align">
              <div className="flex-column vendor-card responsive-bottom-spacing">
                <div className="flex-column vendor-icon-container">
                  <img src={logo4} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">Trello</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
              <div className="flex-column vendor-card responsive-bottom-spacing relative-card">
                <div className="flex-column vendor-icon-container">
                  <img src={logo5} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">Slack</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
              <div className="flex-column vendor-card responsive-bottom-spacing">
                <div className="flex-column vendor-icon-container">
                  <img src={logo6} alt="vendor-logo" className="keep-aspect-ratio-vertically"></img>
                </div>
                <div className="flex-column">
                  <h1 style={{"marginTop":"1rem"}} className="color-darkb">Typeform</h1>
                  <p className="color-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry; Lorem cosum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="flex-column">
          <div className="flex-column flex-centered paragraph-padding" style={{"marginBottom":"4rem"}}>
            <h1 className="color-darkb">Star using Fylo today!</h1>
            <p className="color-gray responsive-bottom-spacing" style={{"textAlign":"center"}}>
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
              questions, our support team would be happy to help you.
            </p>
            <button style={{"width":"10rem"}}>Get Started</button>
          </div>
        </section>


        <footer className="flex-column">
          <li>
            <img src={logo}  style={{"marginRight":"5px"}} className="turn-white" alt="fylo-logo" />
          </li>
          <div className="flex-row flex-1 flex-row-to-column">
            <ul className="flex-column flex-start flex-1">
              <li className="flex-column flex-2 flex-start">
                <p>Receive updates from us, including tips and tricks on how to improve your workflow.</p>
                <div className="flex-row" style={{"width":"100%"}}>
                  <input style={{"flex":"1","marginRight":"1rem","height":"2rem","boxSizing":"border-box"}} />
                  <button style={{"width":"10rem"}}>Join</button>
                </div>
              </li>
              <li><img src={phone} style={{"marginRight":"5px"}} className="icon" alt="phone"/>Phone: +1-543-123-4567</li>
              <li><img src={email} style={{"marginRight":"5px"}} className="icon" alt="email"/>Email: example@fylo.com</li>
            </ul>
            <div style={{"width":"3rem"}}></div>
            <div className="flex-row flex-1 flex-row-to-column ">
              <ul id="footer-options" className="flex-column flex-start">
                <li><b>Fylo</b></li>
                <li>Desktop App</li>
                <li>Mobile App</li>
                <li>Pricing</li>
                <li>Feature</li>
              </ul>
              <ul id="footer-options" className="flex-column flex-start">
                <li><b>Company</b></li>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
              <ul id="footer-options" className="flex-column flex-start">
                <li><b>Support</b></li>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}
export default FyloIntegrations;