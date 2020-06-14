import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {time, errorCount} = props;

  return (
    <WelcomeScreen
      time = {time}
      errorCount = {errorCount}
    />
  );
};

App.proptypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
