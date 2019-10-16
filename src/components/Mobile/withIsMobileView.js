import React from "react";
import { MobileContext } from ".";

/**
 * provides the prop `isMobileView` to the component that the HOC parents
 *
 * @param {*} Component the child component for the consumer HOC
 *
 */
const withIsMobileView = Component => {
  class withIsMobileView extends React.Component {
    render() {
      return (
        <MobileContext.Consumer>
          {isMobileView => {
            return <Component {...this.props} isMobileView={isMobileView} />;
          }}
        </MobileContext.Consumer>
      );
    }
  }
  return withIsMobileView;
};

export default withIsMobileView;
