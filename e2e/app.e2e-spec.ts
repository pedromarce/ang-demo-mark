import { RbcDemoPage } from './app.po';

describe('rbc-demo App', () => {
  let page: RbcDemoPage;

  beforeEach(() => {
    page = new RbcDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
