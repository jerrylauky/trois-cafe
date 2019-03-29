import React, { Component } from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import TopBar from "../TopBar";
import BackgroundImage from "../BackgroundImage";
import NarrowBackgroundImage from "../NarrowBackgroundImage";
import Header from "../backup/Header";
import Introduction from "../backup/Introduction";
import MenuSection from "../MenuSection";
import ScrollTopButton from "../ScrollTopButton";
import Footer from "../Footer";

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import OpenHoursPage from "./pages/OpenHoursPage";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import CheckoutPage from "./pages/CheckoutPage";

class Main extends Component {
  render () {
    // return (
    //   <main>
    //     <Switch>
    //       <Route exact path="/" component={ HomePage } />
    //       <Route path="/order" component={ OrderPage }/>
    //       <Route path="/event" component={ EventPage }/>
    //       <Route path="/online-store" component={ OnlineStorePage }/>

    //       <Route path="/careers" component={ ComingSoonPage } />
    //       <Route path="/customer-care" component={ ComingSoonPage } />
    //       <Route path="/open-hours" component={ ComingSoonPage } />
    //       <Route path="/about-us" component={ ComingSoonPage } />
    //     </Switch>
    //   </main>
    // );

    return (
      <main>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/order" component={ OrderPage }/>
          <Route path="/events" component={ ComingSoonPage }/>
          <Route path="/online-store" component={ ComingSoonPage }/>

          <Route path="/careers" component={ ComingSoonPage } />
          <Route path="/customer-care" component={ ComingSoonPage } />
          <Route path="/open-hours" component={ OpenHoursPage } />
          <Route path="/about-us" component={ ComingSoonPage } />

          <Route path="/checkout" component={ CheckoutPage } />

          <Route path="*" exact={ true } component={ NotFoundPage } />
        </Switch>
      </main>
    );
  }
}


class App extends Component {
  getRouteName () {
    const routeName = this.props.location.pathname.replace(/\W+(?!$)/g, "").toLowerCase();
    return (routeName === "/" ? "home" : routeName) + "-page";
  }

  render() {
    return (
      <div id="site-container" className={ this.getRouteName() }>
        <TopBar location={ this.props.location } />
        <Header />
        <Main />
        <ScrollTopButton />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
