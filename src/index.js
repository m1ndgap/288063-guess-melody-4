import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const settings = {
  gameTime: 15,
  errorCount: 3,
};

ReactDOM.render(
    <App
      errorCount = {settings.errorCount}
      time = {settings.gameTime}
      questions={questions}
    />,
    document.querySelector(`#root`)
);

