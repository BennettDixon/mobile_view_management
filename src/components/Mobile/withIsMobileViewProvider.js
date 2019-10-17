import React from "react";
import IsMobileContext from "./context";

const INITIAL_STATE = {
  size: {
    width: window.innerWidth,
    height: window.innerHeight
  }
};

/*
 * we need a custom HOC for the provider because we need to update on resize
 * could be done within the provider definition but it would get messy
 * so we just encapsulate it with its own HOC :)
 */
const withIsMobileViewProvider = Component => {
  class withIsMobileViewProvider extends React.Component {
    constructor(props) {
      super(props);
      this.state = INITIAL_STATE;
    }

    // add listener to handle window resizing
    componentDidMount() {
      window.addEventListener("resize", this.handleWindowSizeChange);
    }

    handleWindowSizeChange = event => {
      this.setState({
        size: { width: window.innerWidth, height: window.innerHeight }
      });
    };

    render() {
      const isMobileView = this.state.size.width <= 600;
      return (
        <IsMobileContext.Provider value={isMobileView}>
          <Component {...this.props} />
        </IsMobileContext.Provider>
      );
    }
  }
  return withIsMobileViewProvider;
};

export default withIsMobileViewProvider;
