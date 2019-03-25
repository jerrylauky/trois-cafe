import React, { Component } from "react";

export default class NarrowBackgroundImage extends Component {
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