import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx"

const App = (props) => {
  const {time, errorCount} = props;

  return (
    <WelcomeScreen
    time = {time}
    errorCount = {errorCount}
    />
  );
};

export default App;
