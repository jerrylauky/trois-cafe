import React, { Component } from "react";

const horizontalPadding = { padding: "0px 20px" };
const fullWidth = { width: "100%" };

export default class MasonryGrid extends Component {
  render () {
    return (
      <div className="masonry-container">
        <div className="grid">
          <div className="grid-item">
            <a href="/order">
              <img 
                src="https://freshiiwebsite.cdn.prismic.io/freshiiwebsite/1594a13cb48ce671063a97ed8adc662845060d81_slp.png" 
                className="bp1-bitmap2" 
                style={ fullWidth } 
              /> 
              <div style={ horizontalPadding }>
                <div className="blue-title">
                  <p>Order / Catering</p>
                </div> 
                <div className="subtitle"></div> 
                <div className="description">
                  <p>Optimal fuel to the day!</p>
                </div>
              </div>
            </a>
          </div>
          <div className="grid-item disabled">
            <img 
              src="https://freshiiwebsite.cdn.prismic.io/freshiiwebsite/f2ea8d8627d149bafa612d98fc0ce314907fa6ae_corporate_careers.png" 
              className="bp1-bitmap2" 
              style={ fullWidth } 
            /> 
            <div style={ horizontalPadding }>
              <div className="blue-title">
                <p>Events</p>
              </div> 
              <div className="subtitle"></div> 
              <div className="description">
                <p>Check out our latest events! (Coming soon)</p>
              </div>
            </div>
          </div>
          <div className="grid-item disabled">
            <img 
              src="https://freshiiwebsite.cdn.prismic.io/freshiiwebsite/16293415bd4324cc08ce541f4fb28d9f687d4996_juices-no-background-1080x1080-01-min.png" 
              className="bp1-bitmap2" 
              style={ fullWidth } 
            /> 
            <div style={ horizontalPadding }>
              <div className="blue-title">
                <p>Online Store</p>
              </div> 
              <div className="subtitle"></div> 
              <div className="description">
                <p>Check out our latest products! (Coming soon)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}