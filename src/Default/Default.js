import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Default.css';

import preview1 from '../Huddle-LP-Single-Section/assets/design/desktop-preview.jpg'
import preview2 from '../Huddle-LP-Single-Column/assets/design/desktop-preview.jpg'
import preview3 from '../Huddle-LP-Split-Section/assets/design/desktop-preview.jpg'
import preview4 from '../Huddle-LP-Alternative-Section/assets/design/desktop-preview.jpg'

import preview5 from '../Fylo-LP-Sign-Up/assets/design/desktop-preview.jpg'
import preview6 from '../Fylo-LP-Two-Columns/assets/design/desktop-preview.jpg'
import preview7 from '../Fylo-LP-Integrations-Section/assets/design/desktop-preview.jpg'
import preview8 from '../Fylo-LP-Grid-Section/assets/design/desktop-preview.jpg'
import preview9 from '../Fylo-LP-Dark-Theme/assets/design/desktop-preview.jpg'



class Default extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <main id="default">
        <header className="flex-column">
          <div className="flex-row row-to-column" style={{"width":"100%"}}>
            <i className="fas fa-code" style={{"fontSize":"2rem"}}></i>
            <ul className="flex-row header-options">
              <li><a href="https://www.linkedin.com/in/carloswilthew/">Frontend Training by Carlos Wilthew</a></li>
            </ul>
          </div>
          <div className="flex-row" style={{"textAlign":"center"}}>
           <span>Projects, layouts, Images provided by <a href="https://www.frontendmentor.io/challenges"> Frontend Mentor</a>, this page's porpouse is only for training.</span> 
          </div>
        </header>
        <section id="lobby">
          <Link to={`/landing-page-single-section`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview1} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Huddle - Single Section</h1>
              </div>
            </div>
          </Link>
          <Link to={`/landing-page-single-column`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview2} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Huddle - Single Column</h1>
              </div>
            </div>
          </Link>
          <Link to={`/landing-page-split-section`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview3} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Huddle - Split Section</h1>
              </div>
            </div>
          </Link>
          <Link to={`/landing-page-alternative-section`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview4} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Huddle - Alternative Single Section</h1>
              </div>
            </div>
          </Link>
          <Link to={`/fylo-signup`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview5} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Fylo - Sign-up Page</h1>
              </div>
            </div>
          </Link>
          <Link to={`/fylo-twocolumns`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview6} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Fylo - Two Columns Section</h1>
              </div>
            </div>
          </Link>
          <Link to={`/fylo-integrations`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview7} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Fylo - Integrations Page</h1>
              </div>
            </div>
          </Link>
          <Link to={`/fylo-grid`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview8} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Fylo - Grid Page</h1>
              </div>
            </div> 
          </Link>
          <Link to={`/fylo-dark`}>
            <div className="lobby-element">
              <div className="preview-img-container">
                <img src={preview9} alt="img-preview"></img>
              </div>
              <div className="challenge-info-container">
                <h1>Fylo - Dark Theme</h1>
              </div>
            </div>
          </Link>
        </section>
      </main>
    );
  }
}
export default Default;