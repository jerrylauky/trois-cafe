import React from "react";
import ReactDOM from "react-dom";

export default function Section() {
  return (
    <section className="top-bar">
      <div className="container">
        <div className="top-links lftflot">
          <div className="socialfollow">
            <a
              target="_blank"
              href="https://www.facebook.com/lightcafecanada/"
              className="facebook"
            >
              <i className="fa-facebook" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/lightcafecanada/"
              className="instagram"
            >
              <i className="fa-instagram" />
            </a>
          </div>
          <h6>
            <i className="sl-location-pin" />
            23 Baldwin Street
          </h6>
          <h6>
            <i className="sl-phone" />
            647.347.3883
          </h6>
          <h6>
            <i className="sl-envelope-open" />
            info@lightcafe.ca{" "}
          </h6>
        </div>
        <div className="top-links rgtflot">
          <ul id="nav">
            <li
              id="menu-item-9416"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9416"
            >
              <a href="#about">About</a>
            </li>
            <li
              id="menu-item-9417"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9417"
            >
              <a href="#events">Events</a>
            </li>
            <li
              id="menu-item-9418"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9418"
            >
              <a href="#career">Career</a>
            </li>
            <li
              id="menu-item-9419"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9419"
            >
              <a href="#menu">Menu</a>
            </li>
            <li
              id="menu-item-9420"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9420"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
