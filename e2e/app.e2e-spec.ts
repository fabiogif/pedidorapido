import { PedidorapidoPage } from './app.po';

describe('pedidorapido App', () => {
  let page: PedidorapidoPage;

  beforeEach(() => {
    page = new PedidorapidoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pr works!');
  });
});
