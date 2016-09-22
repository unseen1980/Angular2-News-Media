import { Angular2NewsMediaPage } from './app.po';

describe('angular2-news-media App', function() {
  let page: Angular2NewsMediaPage;

  beforeEach(() => {
    page = new Angular2NewsMediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
