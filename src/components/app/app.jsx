import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {time, errorCount} = props;

  return (
    <WelcomeScreen
      time = {time}
      errorCount = {errorCount}
      onWelcomeBtnClick = {welcomeButtonHandler}
    />
  );
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
