import React, { Component } from 'react';
import './LandingPageAlternativeSection.css';

import picture from './assets/images/screen-mockups.svg';
import logo from './assets/images/logo.svg';
import footerbg from './assets/images/vectorpaint.png';

import communities from './assets/images/icon-communities.svg';

import presentation1 from './assets/images/illustration-grow-together.svg';
import presentation2 from './assets/images/illustration-flowing-conversation.svg';
import presentation3 from './assets/images/illustration-your-users.svg';

// <img src={footerbg} alt="footerbg" style={{ marginBottom: '-2px', width: '100%', borderBottom: '1px solid #00252e'}}/>

class LandingPageAlternativeSection extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <main id="landing-page-alternative-section">
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
              <section id="middle-stats">
                <div className="stats-container">
                  <div className="stats-main">
                    <div className="flex column">
                      <img src={communities} className="icon-wrapper" alt="communities"/>
                      <span>1.4k+</span>
                    </div>
                  </div>
                  <div className="stats-sub">
                    <span>Communities Formed</span>
                  </div>
                </div>
                <div className="stats-container">
                  <div className="stats-main">
                    <div className="flex column">
                      <img src={communities}  className="icon-wrapper" alt="messages"/>
                      <span>2.7m+</span>
                    </div>
                  </div>
                    <div className="stats-sub">
                    <span>Messages Sent</span>
                </div>
              </div>  
              </section>
              <section id="middle-presentation">
                <div className="presentation-row">
                  <div className="presentation-text-container">
                    <h1 className="middle-title">
                      Grow Together
                    </h1>
                    <p className="paragraph">
                      Generate meaningful discussions with your audience and build a strong, loyal community.
                      Think of the insightful conversation you mass out on with a feedback form.
                    </p>
                  </div>
                  <div className="presentation-img-container">
                    <img width="709px" height="506px" className="picture-wrapper" src={presentation1} alt="presentation-1"></img>
                  </div>
                </div>
                  <div className="presentation-row">
                    <div className="presentation-text-container">
                      <h1 className="middle-title">
                        Flowing Conversations
                      </h1>
                      <p className="paragraph">
                        You wouldn't paginate a conversation in real life, so why do it online?
                        Our threads have just-in-time loading for a more natural flow.
                      </p>
                    </div>
                    <div className="presentation-img-container">
                      <img width="709px" height="506px" className="picture-wrapper" src={presentation2} alt="presentation-2"></img>
                    </div>
                  </div>
                  <div className="presentation-row">
                    <div className="presentation-text-container">
                      <h1 className="middle-title">
                        Your Users
                      </h1>
                      <p className="paragraph">
                        It takes no time at all to integrate Huddle with your app's authentication solution.
                        This means, once signed in to your app, your users can start chatting immediately.
                      </p>
                  </div>
                <div className="presentation-img-container">
                  <img width="709px" height="506px" className="picture-wrapper" src={presentation3} alt="presentation-3"></img>
                </div>
              </div>
            </section>
            <section id="middle-form">
              <h1>Ready To Build Your Community?</h1>
              <button className="button">Get Started For Free</button>
            </section>
          </div>
        </main>

        <img src={footerbg} alt="footerbg" style={{ marginBottom: '-2px', width: '100%', borderBottom: '1px solid #00252e'}}/>
            
        <footer id="footer-LPAS">
          <div id="footer-LPAS-fix-flex">
            <section>
              <img src={logo} alt="huddle-logo" className="turn-white"/> 
              <p  className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum eget est in pulvinar. Nam accumsan, lorem id ultrices porta.
              </p>
              <div><i className="fas fa-phone-square"></i> <label>Phone: +1-543-123-4567</label></div>
              <div><i className="fas fa-envelope"></i> <label>example@company.com</label></div>
            </section>
            <section>
              <span className="label">NEWSLETTER</span>
              <p className="paragraph">
                To recieve tips on how to grow your community, sign up to our weekly newsletter, We'll never send spam or pass on your email address.                        </p>
              <div className="newsletter-div">
                <input type="text" placeholder="example@mail.com" className="subscribe-input"></input>
                <button className="subscribe-submit">Subscribe</button>
              </div>            
            </section>
          </div>
          <div className="flex rss-icons">
            <i className="fab fa-facebook-f"></i> 
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default LandingPageAlternativeSection;