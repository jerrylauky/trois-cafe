import React, { Component } from "react";

const TARGET_TYPES = {
  BLANK: "_blank"
};

const SOCIAL_TYPES = {
  FACEBOOK: "facebook",
  INSTAGRAM: "instagram"
};

class TopBarSocialIcon extends Component {
  setTarget() {
    return this.openNewPage ? TARGET_TYPES.BLANK : "";
  }

  render() {
    return (
      <a target="_blank" href={ this.props.url } className={ this.props.type }>
        <i className={`fa-${ this.props.type }`} />
      </a>
    );
  }
}

class TopBarFacebookIcon extends Component {
  render() {
    return (
      <TopBarSocialIcon
        openNewPage={ true }
        type={ SOCIAL_TYPES.FACEBOOK }
        url="https://www.facebook.com/lightcafecanada/"
      />
    );
  }
}

class TopBarInstagramIcon extends Component {
  render() {
    return (
      <TopBarSocialIcon
        openNewPage={ true }
        type={ SOCIAL_TYPES.INSTAGRAM }
        url="https://www.instagram.com/lightcafecanada/"
      />
    );
  }
}

class TopBarNavItem extends Component {
  render() {
    return (
      <li id={ this.props.id } className={`menu-item menu-item-type-custom menu-item-object-custom ${ this.props.className }`}>
        <a href={ this.props.href }>{ this.props.text }</a>
      </li>
    );
  }
}

export class TopBarNav extends Component {
  constructor(props) {
    super(props);
    this.navItems = [
      { id: "top-bar-nav-about", href: "#about", text: "About" },
      // { id: "top-bar-nav-events", href: "#events", text: "Events" },
      // { id: "top-bar-nav-career", href: "#career", text: "Career" },
      { id: "top-bar-nav-menu", href: "#menu", text: "Menu" },
      { id: "top-bar-nav-retail", href: "#retail", text: "Retail" },
      // { id: "top-bar-nav-contact", href: "#contact", text: "Contact" }
    ];
  }
  render() {
    return (
      <ul id="nav">
        {this.navItems.map((navItem, itemIndex) => (
          <TopBarNavItem
            key={itemIndex}
            id={navItem.id}
            className={navItem.className}
            href={navItem.href}
            text={navItem.text}
          />
        ))}
      </ul>
    );
  }
}

export default class TopBar extends Component {
  render() {
    return (
      <section className="top-bar">
        <div className="container">
          <div className="top-links lftflot">
            <div className="socialfollow">
              <TopBarFacebookIcon />
              <TopBarInstagramIcon />
            </div>
            <h6>
              <i className="sl-location-pin" />333 King's Road
            </h6>
            <h6>
              <i className="sl-phone" />1833-833
            </h6>
            <h6>
              <i className="sl-envelope-open" />info@troiscafe.hk{" "}
            </h6>
          </div>
          <div className="top-links rgtflot">
            <TopBarNav />
          </div>
        </div>
      </section>
    );
  }
}
