import React from "react";
import ReactDOM from "react-dom";

export default function Header() {
  return (
    <header id="header" className="horizontal-w  sm-rgt-mn sticky">
      <div className="container">
        <div className="col-md-3 col-sm-3 logo-wrap">
          <div className="logo">
            <h1 id="site-title">
              <a href="http://lightcafe.ca/">Light Cafe</a>
              <span className="site-slog">
                <a href="http://lightcafe.ca/">
                  coffee. sandwich. salad. dessert.
                </a>
              </span>
            </h1>
          </div>
        </div>
        <nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9">
          <div id="menu-icon">
            <i className="fa-navicon" /> <span>Menu - </span>
            <span className="mn-clk">Navigation</span>
            <span className="mn-ext1" />
            <span className="mn-ext2" />
            <span className="mn-ext3" />
          </div>
          <div className="container" />
        </nav>
      </div>
    </header>
  );
}
