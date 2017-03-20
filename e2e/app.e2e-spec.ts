import { CatherinePage } from './app.po';

describe('catherine App', function() {
  let page: CatherinePage;

  beforeEach(() => {
    page = new CatherinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
