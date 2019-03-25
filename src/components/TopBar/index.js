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
    return this.props.openNewPage ? TARGET_TYPES.BLANK : "";
  }

  render() {
    const classNames = [ this.props.type ];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return (
      <a target={ this.setTarget() } href={ this.props.url } className={ classNames.join(" ") }>
        <i className={`fa-${ this.props.type }`} />
      </a>
    );
  }
}

export class TopBarFacebookIcon extends Component {
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

export class TopBarInstagramIcon extends Component {
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
    let className = "menu-item menu-item-type-custom menu-item-object-custom";
    className += this.props.active ? " active" : "";
    className += this.props.disabled ? " disabled" : "";
    className += this.props.className ? " " + this.props.className : "";

    if (this.props.disabled) {
      return (
        <li id={ this.props.id } className={ className }>
          <a>{ this.props.text }</a>
        </li>
      );
    } else {
      return (
        <li id={ this.props.id } className={ className }>
          <a href={ this.props.href }>{ this.props.text }</a>
        </li>
      );
    }
  }
}

export class TopBarNav extends Component {
  constructor(props) {
    super(props);
    this.navItems = [
      { id: "top-bar-nav-home", href: "/", text: "Home" },
      { id: "top-bar-nav-order", href: "/order", text: "Order" },
      // { id: "top-bar-nav-about", href: "#about", text: "About" },
      { id: "top-bar-nav-events", href: "/events", text: "Events", disabled: true },
      // { id: "top-bar-nav-career", href: "#career", text: "Career" },
      // { id: "top-bar-nav-menu", href: "#menu", text: "Menu" },
      // { id: "top-bar-nav-retail", href: "#retail", text: "Retail" },
      { id: "top-bar-nav-online-store", href: "/online-store", text: "Online Store", disabled: true },
      // { id: "top-bar-nav-contact", href: "#contact", text: "Contact" }
    ];
  }
  render() {
    const navProps = this.props;
    return (
      <ul id="nav">
        {this.navItems.map((navItem, itemIndex) => (
          <TopBarNavItem
            key={itemIndex}
            active={navProps.location && navItem.href === navProps.location.pathname}
            id={navItem.id}
            className={navItem.className}
            href={navItem.href}
            text={navItem.text}
            disabled={navItem.disabled}
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
              <i className="sl-location-pin" />G/F, 6 Tit Hong Lane, Central, Hong Kong
            </h6>
            <h6>
              <i className="sl-phone" />+852 28336110
            </h6>
            <h6>
              <i className="sl-envelope-open" />enquiries@troiscafe.com{" "}
            </h6>
          </div>
          <div className="top-links rgtflot">
            <TopBarNav location={ this.props.location } />
          </div>
        </div>
      </section>
    );
  }
}
