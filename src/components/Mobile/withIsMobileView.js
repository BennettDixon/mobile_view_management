import React from "react";
import IsMobileContext from "./context";

/**
 * provides the prop `isMobileView` to the component that the HOC parents
 *
 * @param {*} Component the child component for the consumer HOC
 *
 */
const withIsMobileView = Component => {
  class WithIsMobileView extends React.Component {
    render() {
      return (
        <IsMobileContext.Consumer>
          {isMobileView => {
            return <Component {...this.props} isMobileView={isMobileView} />;
          }}
        </IsMobileContext.Consumer>
      );
    }
  }
  return WithIsMobileView;
};

export default withIsMobileView;
