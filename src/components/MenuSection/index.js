import React, { Component } from "react";

export default class MenuSection extends Component {
  render () {
    const centerHelveticaTextStyle = {
      // "font-family: Helvetica; font-weight: 300; text-align: center;"
      fontFamily: "Helvetica",
      fontWeight: "300",
      textAlign: "center"
    };
    const shortCenterTextStyle = {
      // "line-height: 9px; font-family: Helvetica; font-weight: 300; text-align: center;"
      lineHeight: "9px",
      fontFamily: "Helvetica",
      fontWeight: "300",
      textAlign: "center"
    };
    const italicTextStyle = {
      // "font-size: 9px; font-style: italic;"
      fontSize: "9px",
      fontStyle: "italic"
    };
    const centerTextStyle = {
      textAlign: "center"
    };
    const rightTextStyle = {
      textAlign: "right"
    };
    return (
      <section className="container">
        <div className="row-wrapper-x">
          <section className="wpb_row  gray">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p><a name="menu"></a></p>
                              <div className="max-title2">
                                <h3>Menu</h3>
                              </div>
                              <p style={ centerHelveticaTextStyle }>
                                We are equipped with dining area that breathes cozy ambience, customarily designed to cater various types of events &amp; gatherings – from fun birthday bash to successful product launch and comfy business meeting.
                              </p>
                              <br />
                              <p style={ centerHelveticaTextStyle }>
                                For catering inquires, email us at&nbsp;<a href="mailto:info@troiscafe.hk">info@troiscafe.hk</a>
                              </p>
                            </div>
                            <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                              <div className="wpb_wrapper">
                                <center>
                                  <a target="_blank" href="assets/pdfs/Menu.pdf" className="button theme-skin square large bordered-bot button-hover">
                                    DOWNLOAD OUR MENU
                                  </a>
                                </center>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

/**
          <section className="wpb_row  ">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div className="wpb_wrapper">
                      <a name="menu"></a>
                    </div>
                  </div>
                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div className="wpb_wrapper">
                      <center>
                        <a href="http://lightcafe.ca/wp-content/uploads/2019/02/LC-menu-2019-.pdf" className="button theme-skin square large bordered-bot button-hover" target="_self">
                          DOWNLOAD OUR MENU
                        </a>
                      </center>
                    </div>
                  </div>
                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div className="wpb_wrapper">
                      <div className="max-title2">
                        <h3>Online ordering</h3>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                            <div className="wpb_wrapper">
                              <p style={ rightTextStyle }>
                                <a href="https://www.foodora.ca/restaurant/s6bt/light-cafe-inc ">
                                  <img src="http://lightcafe.ca/wp-content/uploads/2016/07/foodoragrayline-1.png" width="250px" />
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_btn3-container vc_btn3-center">
                            <a 
                              className="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-square vc_btn3-style-modern vc_btn3-block vc_btn3-color-grey" 
                              href="https://www.ubereats.com/en-CA/toronto/food-delivery/light-cafe-inc/bVTwWknsQ2WYUB_LdZstxA/" title="">
                              ORDER TAKE-OUT | UBEREATS
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wpb_row  ">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div className="wpb_wrapper">
                      <a name="contact"></a>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                            <div className="vc_icon_element-inner vc_icon_element-color-chino vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey">
                              <span className="vc_icon_element-icon fa fa-map-marker"></span>
                            </div>
                          </div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <div style={ centerTextStyle }>23 Baldwin Street</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                            <div className="vc_icon_element-inner vc_icon_element-color-chino vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey">
                              <span className="vc_icon_element-icon fa fa-phone"></span>
                            </div>
                          </div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <div style={ centerTextStyle }>647-347-3883</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                            <div className="vc_icon_element-inner vc_icon_element-color-chino vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey">
                              <span className="vc_icon_element-icon fa fa-at"></span>
                            </div>
                          </div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <div style={ centerTextStyle }>
                                <a href="mailto:info@lightcafe.ca">info@lightcafe.ca</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
**/