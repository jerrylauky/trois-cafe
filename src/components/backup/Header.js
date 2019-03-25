import React, { Component } from "react";
import { TopBarNav } from "../TopBar";

export default class Header extends Component {
  state = {
    menuIconActive: false
  };

  render () {
    const headerClassName = "horizontal-w  sm-rgt-mn sticky " + (this.state.menuIconActive ? "active" : "");
    return (
      <header id="header" className={ headerClassName }>
        <div className="container">
          <div className="col-md-3 col-sm-3 logo-wrap">
            <div className="logo">
              <h1 className="site-title">
                <a href="http://lightcafe.ca/">Trois Cafe</a>
                <br />
                <span className="site-slog">
                  <a href="http://lightcafe.ca/">
                    tea. coffee. panini.
                  </a>
                </span>
              </h1>
            </div>
          </div>
          <nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9">
            <div 
              id="menu-icon" className={ this.state.menuIconActive ? "active" : "" } 
              onClick={e => this.setState({menuIconActive: !this.state.menuIconActive})}>
              <i className="fa-navicon" /> <span>Menu - </span>
              <span className="mn-clk">Navigation</span>
              <span className="mn-ext1" />
              <span className="mn-ext2" />
              <span className="mn-ext3" />
            </div>
            <div className="container">
              <TopBarNav />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
