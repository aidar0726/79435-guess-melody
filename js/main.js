const app = document.querySelector(`.app`);
const templates = document.querySelector(`#templates`).content;
const screenWelcome = templates.querySelector(`.main--welcome`);
const screenLevelGenre = templates.querySelector(`.main--level-genre`);
const screenLevelArtist = templates.querySelector(`.main--level-artist`);
const screenResult = templates.querySelector(`.main--result`);
const screensSequence = [screenWelcome, screenLevelGenre, screenLevelArtist, screenResult];
const LEFT_ARROW_KEYKODE = 37;
const RIGHT_ARROW_KEYKODE = 39;

let currentSequence = 0;
let currentScreen;


const renderScreen = (index) => {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(screensSequence[index], currentScreen);
};

const onDocumentKeyDown = (event) => {
  if (event.altKey && event.keyCode === RIGHT_ARROW_KEYKODE && currentSequence < screensSequence.length - 1) {
    ++currentSequence;
  } else if (event.altKey && event.keyCode === LEFT_ARROW_KEYKODE && currentSequence > 0) {
    --currentSequence;
  }
  renderScreen(currentSequence);
};

renderScreen(currentSequence);

document.addEventListener(`keydown`, onDocumentKeyDown);
