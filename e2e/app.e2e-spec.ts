import { NascarFantasyAppPage } from './app.po';

describe('nascar-fantasy-app App', () => {
  let page: NascarFantasyAppPage;

  beforeEach(() => {
    page = new NascarFantasyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
