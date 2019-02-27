import React, { Component } from "react";
import TopBar from "../TopBar";
import Header from "../backup/Header";
import Introduction from "../backup/Introduction";
import MenuSection from "../MenuSection";
import "./App.css";

class BackgrounImage extends Component {
  render () {
    return (
      <div className="tp-bgimg">
      </div>
    );
  }
}

class NarrowBackgroundImage extends Component {
  render () {
    const bgStyle = {
      background: "url('http://lightcafe.ca/wp-content/uploads/2016/06/13441654_10154322244902578_1986947357_o.jpg')",
      backgroundSize: "cover",
      height: "450px",
      backgroundPosition: "center center",
      margin: "-40px 0px -20px 0px"
    };
    return (
      <section className="wpb_row   full-row">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                <div className="wpb_wrapper">
                  <div style={ bgStyle }></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class ScrollTopButton extends Component {
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

class App extends Component {
  render() {
    return (
      <div id="site-container">
        <TopBar />
        <Header />
        <BackgrounImage />
        <Introduction />
        <NarrowBackgroundImage />
        <MenuSection />
        <ScrollTopButton />
      </div>
    );
  }
}

export default App;
