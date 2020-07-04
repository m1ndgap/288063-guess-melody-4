import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionsScreen from "./genre-question-screen";
import GenreQuestionScreen from "./genre-question-screen";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`
  },{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`
  },{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`
  },{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`
  }]
}

describe(`GenreQuestionComponent`, () => {
  it(`GenreQuestionScreen is rendered correctly`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        question={question}
        onAnswer={() => {}}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  })

});