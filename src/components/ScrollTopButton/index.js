import React, { Component } from "react";

export default class ScrollTopButton extends Component {
  render () {
    return (
      <span id="scroll-top" onClick={e => window.scrollTo(0, 0)}>
        <a className="scrollup" style={{ display: "block" }}>
          <i className="fa-chevron-up"></i>
        </a>
      </span>
    );
  }
}