import React, { Component } from "react";

const introContentStyle = {
  textAlign: "center",
  fontFamily: "Helvetica",
  fontWeight: "300",
  fontSize: "20px"
};

export default class NotFoundPage extends Component {
  render () {
    return (
      <section className="container">
        <div className="row-wrapper-x">
          <section className="wpb_row  ">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div className="wpb_wrapper">
                      <div className="max-title2">
                        <h3>Page Not Found</h3>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <p style={introContentStyle}>
                        Oh no! The page you are looking for does not exist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}