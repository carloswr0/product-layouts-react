import React, { Component } from 'react';
import './LandingPageSingleColumn.css';

import picture from './assets/images/screen-mockups.svg';
import logo from './assets/images/logo.svg';

class LandingPageSingleColumn extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
        <React.Fragment>
            <main id="landing-page-single-column">
                <header>
                    <img src={logo} alt="huddle-logo"/>
                </header>
                <div id="middle-container">
                    <section id="middle-paragraph">
                        <div className="paragraph-wrapper">
                            <h1 className="middle-title">
                                Build The Community Your Fans Will Love
                            </h1>
                            <p className="middle-paragraph">
                                Huddle re-imagines the way we build communities. 
                                You have a voice, but so does your audience. 
                                Create connections with your users as you engage in genuine discussion.
                            </p>
                        </div>
                    </section>
                    <section id="middle-picture">
                        <img width="709px" height="506px" className="picture-wrapper" src={picture} alt="main" />
                    </section>
                    <section id="middle-form">
                        <h1>Sign Up For Early Access</h1>
                        <div className="registration-form">
                            <input type="text" className="input-text" placeholder="email@example.com"></input>
                            <button className="button">Register</button>
                        </div>
                    </section>
                </div>
            </main>
            <footer id="footer-LPSC">
                <div id="footer-LPSC-fix-flex">
                    <section>
                        <img src={logo} alt="huddle-logo" className="turn-white"/> 
                        <div className="flex">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </section>
                    <section>
                        <ol className="contact-list">
                            <li>About Us</li>
                            <li>What We Do</li>
                            <li>FAQ</li>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ol>
                        <div className="copyrights">
                            © 2018 Huddle Copyright
                        </div>
                    </section>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}
export default LandingPageSingleColumn;