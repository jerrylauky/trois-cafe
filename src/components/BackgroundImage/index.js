import React, { Component } from "react";
import BackgroundSlider from "react-background-slider";

export default class BackgroundImage extends Component {
  render () {
    return (
      <div className="tp-bgimg">
        <BackgroundSlider
          images={[
            "http://lightcafe.ca/wp-content/uploads/2018/01/cover-4.jpg",
            "http://lightcafe.ca/wp-content/uploads/2018/01/coffee-2.jpg", 
            "http://lightcafe.ca/wp-content/uploads/2018/01/starter-1-1.jpg"
          ]}
          duration={ 5 } transition={ 2 } 
        />
      </div>
    );
  }
}