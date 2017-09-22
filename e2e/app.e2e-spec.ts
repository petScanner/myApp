import { PetScannerPage } from './app.po';

describe('pet-scanner App', () => {
  let page: PetScannerPage;

  beforeEach(() => {
    page = new PetScannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
