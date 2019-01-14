import React, { Component } from 'react';
import './LandingPageSingleSection.css';
import picture from './assets/images/illustration-mockups.svg';
import logo from './assets/images/logo.svg';

class LandingPageSingleSection extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
        <main id="landing-page-single-section">
            <header>
                <img src={logo} alt="huddle-logo"/>
            </header>
            <div id="middle-container">
                <section id="middle-picture">
                    <img width="709px" height="506px" className="picture-wrapper" src={picture} alt="main" />
                </section>
                <section id="middle-paragraph">
                    <div className="paragraph-wrapper">
                        <h1 className="middle-title">Build The Community Your Fans Will Love</h1>
                        <p className="middle-paragraph">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <button className="button">Register</button>
                    </div>
                </section>
            </div>
            <footer>
                <div id="rss-container">
                    <div><i className="fab fa-facebook-f"></i></div>
                    <div><i className="fab fa-twitter"></i></div>
                    <div><i className="fab fa-instagram"></i></div>       
                </div>   
            </footer>
        </main>
    );
  }
}
export default LandingPageSingleSection;