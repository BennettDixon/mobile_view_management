import React from "react";

import { withIsMobileView } from "../Mobile";

// mobile landing page component
const MobileLandingPage = () => {
  return <h1>Mobile Landing Page</h1>;
};

// desktop landing page componenet
const DesktopLandingPage = () => {
  return <h1>Desktop Landing Page</h1>;
};

// landing page conditionally rendering mobile or desktop
class LandingPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.isMobileView ? (
          <MobileLandingPage />
        ) : (
          <DesktopLandingPage />
        )}
      </div>
    );
  }
}

export default withIsMobileView(LandingPage);
