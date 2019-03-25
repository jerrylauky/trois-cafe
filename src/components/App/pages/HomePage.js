import React, { Component } from "react";

import BackgroundImage from "../../BackgroundImage";
import NarrowBackgroundImage from "../../NarrowBackgroundImage";
import Introduction from "../../backup/Introduction";
import MenuSection from "../../MenuSection";
import MasonryGrid from "../../MasonryGrid";

export default class HomePage extends Component {
  render () {
    // return (
    //   <div>
    //     <BackgroundImage />
    //     <Introduction />
    //     <NarrowBackgroundImage />
    //     <MenuSection />
    //   </div>
    // );

    return (
      <div>
        <BackgroundImage />
        <Introduction />
        <MasonryGrid />
      </div>
    );
  }
}