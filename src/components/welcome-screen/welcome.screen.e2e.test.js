import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Welcome Screen Component`, () => {
  it(`Welcome button interaction`, () => {

    const onWelcomeBtnClick = jest.fn();
    // const preventDefault = jest.fn(); // we can use this to count function calls inside the function calls

    const welcomeScreen = shallow(
        <WelcomeScreen
          time={15}
          errorCount={3}
          onWelcomeBtnClick={onWelcomeBtnClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`, { preventDefault() {} });
    // welcomeButton.simulate(`click`, { preventDefault() {} }); // if we use mount instead of shallow

    welcomeScreen.update();

    expect(onWelcomeBtnClick.mock.calls.length).toBe(1);
    //expect(onWelcomeBtnClick).toHaveBeenCalledTimes(1);
  });
});
