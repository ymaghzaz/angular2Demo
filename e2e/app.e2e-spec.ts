import { MgCaPage } from './app.po';

describe('mg-ca App', function() {
  let page: MgCaPage;

  beforeEach(() => {
    page = new MgCaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
