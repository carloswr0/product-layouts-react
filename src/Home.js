import React, { Component } from 'react';
import './Home.css';

import Default from './Default/Default';

import { BrowserRouter as Router, Route} from 'react-router-dom' ;

//Components
import LandingPageSingleSection from './Huddle-LP-Single-Section/LandingPageSingleSection';
import LandingPageSplitSection from './Huddle-LP-Split-Section/LandingPageSplitSection';
import LandingPageSingleColumn from './Huddle-LP-Single-Column/LandingPageSingleColumn';
import LandingPageAlternativeSection from './Huddle-LP-Alternative-Section/LandingPageAlternativeSection';

import FyloSignUp from './Fylo-LP-Sign-Up/FyloSignUp';
import FyloTwoColumns from './Fylo-LP-Two-Columns/FyloTwoColumns';
import FyloIntegrations from './Fylo-LP-Integrations-Section/FyloIntegrations';
import FyloGrid from './Fylo-LP-Grid-Section/FyloGrid';
import FyloDark from './Fylo-LP-Dark-Theme/FyloDark';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div id="home">
        <Router>
          <React.Fragment>
            <Route path="/"                                 render={(props) => <Default                       {...props} props={this.state} />} exact={true} />
            <Route path="/landing-page-single-section"      render={(props) => <LandingPageSingleSection      {...props} props={this.state} />} />
            <Route path="/landing-page-split-section"       render={(props) => <LandingPageSplitSection       {...props} props={this.state} />} />
            <Route path="/landing-page-single-column"       render={(props) => <LandingPageSingleColumn       {...props} props={this.state} />} />
            <Route path="/landing-page-alternative-section" render={(props) => <LandingPageAlternativeSection {...props} props={this.state} />} />
            <Route path="/fylo-signup"        render={(props) => <FyloSignUp        {...props} props={this.state} />} />
            <Route path="/fylo-twocolumns"    render={(props) => <FyloTwoColumns    {...props} props={this.state} />} />
            <Route path="/fylo-integrations"  render={(props) => <FyloIntegrations  {...props} props={this.state} />} />
            <Route path="/fylo-grid"          render={(props) => <FyloGrid          {...props} props={this.state} />} />
            <Route path="/fylo-dark"          render={(props) => <FyloDark          {...props} props={this.state} />} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default Home;