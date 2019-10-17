import React, { Component } from "react";

import LandingPage from "../Landing";

class App extends Component {
  // TODO uidContext should be included in authentication scheme
  // current implementation is hardcoded id in App
  render() {
    return <LandingPage />;
  }
}
export default App;
