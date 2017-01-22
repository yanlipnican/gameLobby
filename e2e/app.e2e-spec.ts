import { GameLobbyPage } from './app.po';

describe('game-lobby App', function() {
  let page: GameLobbyPage;

  beforeEach(() => {
    page = new GameLobbyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
