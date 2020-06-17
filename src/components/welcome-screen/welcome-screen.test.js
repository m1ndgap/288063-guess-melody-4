import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from "./welcome-screen";

it(`Render Welcome`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time = {15}
      errorCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
