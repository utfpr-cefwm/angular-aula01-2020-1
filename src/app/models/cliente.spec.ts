import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente();
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

});
