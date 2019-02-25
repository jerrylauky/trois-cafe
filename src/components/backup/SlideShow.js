import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

class SlideShowFonts extends Component {
  render() {
    return (
      <div>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto+Slab%3A400%2C700"
          rel="stylesheet"
          property="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto%3A900%2C700"
          rel="stylesheet"
          property="stylesheet"
          type="text/css"
          media="all"
        />
      </div>
    );
  }
}

const wrapperStyle = {
  margin: "0px auto",
  backgroundColor: "rgb(17, 17, 17)",
  padding: "0px",
  height: "656px",
  overflow: "visible"
};
const innerWrapperStyle = {
  marginTop: "0px",
  marginBottom: "0px",
  height: "727px"
};
class SlideShowWrapper extends Component {
  render() {
    return (
      <div
        id="rev_slider_1_1_wrapper"
        className="rev_slider_wrapper fullwidthbanner-container"
        style={wrapperStyle}
      >
        <div
          id="rev_slider_1_1"
          className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive"
          style={innerWrapperStyle}
          data-version="5.2.4.1"
          data-slideactive="rs-28"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

// <img src="http://lightcafe.ca/wp-content/plugins/revslider/admin/assets/images/dummy.png" alt="" title="cover 4" width="3906" height="2916" data-lazyload="http://lightcafe.ca/wp-content/uploads/2018/01/cover-4.jpg" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg defaultimg" data-no-retina="">
const slideStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: "18",
  visibility: "unset"
  // visibility: "hidden",
  // opacity: "0",
  // backgroundColor: "rgba(255, 255, 255, 0)"
};
const slotholderStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  zIndex: "0",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "translate3d(0px, 0px, 0px)",
  visibility: "inherit",
  opacity: "1"
};
const tpBgimgStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  backgroundRepeat: "no-repeat",
  backgroundImage:
    "url('http://lightcafe.ca/wp-content/uploads/2018/01/cover-4.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  width: "100%",
  height: "100%",
  opacity: "1",
  visibility: "inherit",
  zIndex: "20"
};
const tpParallaxWrapStyle = {
  position: "absolute",
  visibility: "hidden",
  left: "166px",
  top: "87px",
  zIndex: "5"
};
const tpLoopWrapStyle = {
  position: "absolute"
};
const tpMaskWrapStyle = {
  position: "absolute",
  overflow: "visible",
  height: "auto",
  width: "auto"
};
const tpCaptionStyle = {
  zIndex: "5",
  visibility: "hidden",
  transition: "none 0s ease 0s",
  lineHeight: "0px",
  borderWidth: "0px",
  margin: "0px",
  padding: "0px",
  letterSpacing: "0px",
  fontWeight: "300",
  fontSize: "8px",
  whiteSpace: "nowrap",
  minHeight: "0px",
  minWidth: "0px",
  maxHeight: "none",
  maxWidth: "none",
  opacity: "0.0001",
  transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  transformOrigin: "50% 50% 0px"
};
const tpImgStyle = {
  width: "309.885px",
  height: "232.688px",
  transition: "none 0s ease 0s",
  lineHeight: "0px",
  borderWidth: "0px",
  margin: "0px",
  padding: "0px",
  letterSpacing: "0px",
  fontWeight: "300",
  fontSize: "8px"
};
class Slide extends Component {
  render() {
    return (
      <li
        data-index="rs-26"
        data-transition="fade"
        data-slotamount="default"
        data-hideafterloop="0"
        data-hideslideonmobile="off"
        data-easein="default"
        data-easeout="default"
        data-masterspeed="200"
        data-thumb="http://lightcafe.ca/wp-content/uploads/2018/01/cover-4-100x50.jpg"
        data-delay="5959.9609375"
        data-rotate="0"
        data-fstransition="fade"
        data-fsmasterspeed="1500"
        data-fsslotamount="7"
        data-saveperformance="off"
        data-title="Slide"
        data-param1=""
        data-param2=""
        data-param3=""
        data-param4=""
        data-param5=""
        data-param6=""
        data-param7=""
        data-param8=""
        data-param9=""
        data-param10=""
        data-description=""
        className="tp-revslider-slidesli"
        style={slideStyle}
      >
        <div className="slotholder" style={slotholderStyle}>
          <div
            className="tp-bgimg defaultimg"
            style={tpBgimgStyle}
            src="http://lightcafe.ca/wp-content/uploads/2018/01/cover-4.jpg"
          />
        </div>
        <div className="tp-parallax-wrap" style={tpParallaxWrapStyle}>
          <div className="tp-loop-wrap" style={tpLoopWrapStyle}>
            <div className="tp-mask-wrap" style={tpMaskWrapStyle}>
              <div
                className="tp-caption   tp-resizeme"
                id="slide-26-layer-1"
                data-x="304"
                data-y="159"
                data-width="['none','none','none','none']"
                data-height="['none','none','none','none']"
                data-transform_idle="o:1;"
                data-transform_in="opacity:0;s:300;e:Power2.easeInOut;"
                data-transform_out="opacity:0;s:300;"
                data-start="319.921875"
                data-responsive_offset="on"
                data-end="5769.921875"
                style={tpCaptionStyle}
              >
                <img
                  src="http://lightcafe.ca/wp-content/uploads/2016/06/mainlogonocircle-1.png"
                  alt=""
                  width="612"
                  height="492"
                  data-ww="566px"
                  data-hh="425px"
                  data-lazyload="http://lightcafe.ca/wp-content/uploads/2016/06/mainlogonocircle-1.png"
                  data-no-retina=""
                  style={tpImgStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const SlidesStyle = {
  visibility: "visible",
  display: "block",
  overflow: "hidden",
  // width: "657px",
  width: "100%",
  height: "100%",
  maxHeight: "none",
  left: "0px"
};
class Slides extends Component {
  render() {
    return (
      <ul className="tp-revslider-mainul" style={SlidesStyle}>
        <Slide />
      </ul>
    );
  }
}

export default function SlideShow() {
  return (
    <section className="wpb_row   full-row">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element ">
              <div className="wpb_wrapper">
                <div className="wpb_revslider_element wpb_content_element">
                  <SlideShowFonts />
                  <SlideShowWrapper>
                    <Slides />
                  </SlideShowWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
