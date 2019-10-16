import React from "react";
import { MobileContext } from ".";

/**
 * PROPER USE:
 * ```
 * withIsMobileView(MobileComponentToRender)(DesktopComponentToRender);
 * ```
 *
 * COMPOSE USE:
 * Using with compose can get a bit weird, recommended to compose a component then use that with this HOC.
 * Example:
 * ```
 * const myMobileComponent = compose(withSomething, withSomethingElse)(MobileComponent);
 * const myDesktopComponent = compose(withSomething)(DesktopComponent);
 * export default withIsMobileView(myMobileComponent)(myDesktopComponent);
 * ```
 *
 * @param {*} MobileComponent the component to render if it's a mobile view
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
