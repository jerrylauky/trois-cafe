import React from "react";
import ReactDOM from "react-dom";

const introHeaderStyle = {
  fontSize: "2rem",
  textAlign: "center",
  fontFamily: "helvetica",
  fontWeight: "300"
};

const introContentStyle = {
  textAlign: "center",
  fontFamily: "Helvetica",
  fontWeight: "300",
  fontSize: "20px"
};

export default function Introduction() {
  return (
    <section className="container">
      <div className="row-wrapper-x">
        <section className="wpb_row  ">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-3">
                    <div className="vc_column-inner">
                      <a name="about" />
                      <div className="wpb_wrapper" />
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-6">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h4 style={introHeaderStyle}>
                              A Fujianese-inspired café that offers a great
                              selection of gourmet café food and drinks with a
                              contemporary twist.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-3">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper" />
                    </div>
                  </div>
                </div>
                <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div className="wpb_wrapper">
                    <div className="max-title2">
                      <h3>Our philosophy</h3>
                    </div>
                  </div>
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p style={introContentStyle}>
                      Eat&nbsp;fresh, live true, stay hungry.
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
