import React, { Component } from "react";

export default class OpenHoursPage extends Component {
  render () {
    return (
      <div>
        <section class="container">
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
                                  <h3>Open Hours</h3>
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
          <div className="store-info-sections">
            <div className="section store-info">
              <img src="https://freshiiwebsite.cdn.prismic.io/freshiiwebsite/ec017654541260bd9fcea04e5e4824221b136263_franchising.png" id="store-img" /> 
              <div className="location-info">
                <h2 aria-label="location nameRosedale" tabindex="0" className="display-name">Central</h2> 
                <h3 className="address">
                  <a aria-label="location address1055 Yonge StToronto, M4W 2L2" target="_blank" href="https://maps.google.com/maps?q=1055 Yonge St" className="default-text">
                    G/F, 6 Tit Hong Lane, Central, Hong Kong
                  </a>
                </h3> 
                <div className="phone-number">
                  <h3>
                    <a aria-label="location phone number+1 647 350 2001" href="tel:+1 647 350 2001" className="default-text">
                      +852 28336110
                    </a>
                  </h3>
                </div> 
                <div className="email">
                  <h3>
                    <a aria-label="location email addressrosedale@freshii.com" href="mailto:rosedale@freshii.com" className="default-text">
                      info@troiscafe.hk
                    </a>
                  </h3>
                </div>
              </div>
            </div> 
            <div className="section hours-info">
              <div tabindex="0" className="hours-container">
                <h2>open now</h2> 
                <div className="hours">
                  <div>
                    <span className="day-container bold">
                      <p aria-label="sundaystore hours">Sunday</p> <p>8:00AM - 7:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="mondaystore hours">Monday</p> <p>7:30AM - 9:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="tuesdaystore hours">Tuesday</p> <p>7:30AM - 9:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="wednesdaystore hours">Wednesday</p> <p>7:30AM - 9:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="thursdaystore hours">Thursday</p> <p>7:30AM - 9:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="fridaystore hours">Friday</p> <p>7:30AM - 9:00PM</p>
                    </span>
                  </div>
                  <div>
                    <span className="day-container">
                      <p aria-label="saturdaystore hours">Saturday</p> <p>8:00AM - 8:00PM</p>
                    </span>
                  </div>
                </div>
              </div> 
              <div tabindex="0" className="amenities-container">
                <h2 aria-label="$t('locationamenities')">this store has...</h2> 
                <div className="amenities">
                  <div aria-label="Breakfast" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/MCfky7oBbIxxgYwXJayoKoamMKGC5WUJX8GEI6Ud.png" /> 
                    <p>Breakfast</p>
                  </div>
                  <div aria-label="Catering" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/i9Ti5iSPot4bS8oWAPeiKiUUGAota8vLlEtCzv3J.png" /> 
                    <p>Catering</p>
                  </div>
                  <div aria-label="Coffii" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/lrdq2zmwX0XzsnpxFxcu5P07dXmG96Rk09GvMcbT.png" /> 
                    <p>Coffee</p>
                  </div>
                  <div aria-label="Dine-in" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/f4xzWoQ0S6XAldRHSg9RZa4z4nqnum57uQzQpT1z.png" /> 
                    <p>Dine-in</p>
                  </div>
                  <div aria-label="Smoothies" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/aGW8D14WaRLGuQKXLNe4bB7ofMwE9aVgV5gXoeN1.png" /> 
                    <p>Smoothies</p>
                  </div>
                  <div aria-label="Wi-fi" className="amenity-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/unoapp.resources.independent/2/dna1NfdscSXHne1gRgp96n711xa2pQZwnfbApMsx.png" /> 
                    <p>Wi-fi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}