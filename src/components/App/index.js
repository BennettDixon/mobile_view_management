import React, { Component } from "react";

import { withIsMobileViewProvider } from "../Mobile";

import LandingPage from "../Landing";

class App extends Component {
  // TODO uidContext should be included in authentication scheme
  // current implementation is hardcoded id in App
  render() {
    return <LandingPage />;
  }
}
export default withIsMobileViewProvider(App);
