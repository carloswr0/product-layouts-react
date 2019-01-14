import React, { Component } from 'react';
import './LandingPageSplitSection.css';

import picture from './assets/images/screen-mockups.svg';
import logo from './assets/images/logo.svg';
import presentation from './assets/images/illustration-your-users.svg';
import arrow from './assets/images/icon-arrow.svg';

class LandingPageSplitSection extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
    return (
      <React.Fragment>
            <main id="landing-page-split-section">
                <header>
                    <img src={logo} alt="huddle-logo"/>
                    <button className="button alternative-bttn">Try It Free</button>
                </header>
                <div id="middle-container">
                    <section id="middle-paragraph">
                        <div className="paragraph-wrapper">
                            <h1 className="middle-title">
                                Build The Community Your Fans Will Love
                            </h1>
                            <p className="paragraph">
                                Huddle re-imagines the way we build communities. 
                                You have a voice, but so does your audience. 
                                Create connections with your users as you engage in genuine discussion.
                            </p>
                            <button className="button">Get Started For Free</button>
                        </div>
                    </section>
                    <section id="middle-picture">
                        <img width="709px" height="506px" className="picture-wrapper" src={picture} alt="main" />
                    </section>
                    <section id="middle-presentation">
                        <div className="grow-together-text">
                            <div className="grow-together-separation">
                                <h2>
                                    Grow Together
                                </h2>
                                <p className="paragraph">
                                    Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with feedback form.
                                </p>
                            </div>
                            <div className="grow-together-separation">
                                <h2>
                                    Flowing Conversations
                                </h2>
                                <p className="paragraph">
                                    You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loadind for more natural flow.
                                </p>
                            </div>
                            <div className="grow-together-separation">
                                <h2>
                                    Your Users
                                </h2>
                                <p className="paragraph">
                                    It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in toyour app, your users can start chatting inmediately.
                                </p>
                            </div>
                        </div>
                        <div className="grow-together-image">
                            <img width="709px" height="506px" className="picture-wrapper" src={presentation} alt="presentation" />
                        </div>
                    </section>
                    <section id="middle-form">
                        <h1>Ready To Build Your Community?</h1>
                        <button className="button">Get Started For Free</button>
                    </section>
                </div>
            </main>
            <footer id="footer-LPSS">
                <div id="footer-LPSS-fix-flex">
                    <section>
                        <img src={logo} alt="huddle-logo" className="turn-white"/> 
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum eget est in pulvinar. Nam accumsan, lorem id ultrices porta.
                        </p>
                        <div className="flex rss-icons">
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
                        </ol>
                        <ol className="contact-list">
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ol>
                    </section>
                    <section>
                        <ol className="contact-list">
                            <span className="label">SUBSCRIBE</span>
                            <div>
                                <input type="text" placeholder="example@mail.com" className="subscribe-input"></input>
                                <button className="subscribe-submit"><img src={arrow} alt="arrow"></img></button>
                            </div>
                        </ol>
                    </section>
                </div>
                <div className="copyrights">
                    © 2018 Huddle Copyright
                </div>
            </footer>
        </React.Fragment>
    );
  }
}
export default LandingPageSplitSection;