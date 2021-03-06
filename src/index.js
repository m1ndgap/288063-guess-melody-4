import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  gameTime: 15,
  errorCount: 3,
};

ReactDOM.render(
    <App
      errorCount = {settings.errorCount}
      time = {settings.gameTime}
    />,
    document.querySelector(`#root`)
);

