import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      12,
      'João da Silva',
      100.00,
      new Date(),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  describe('crédito pré-aprovado', () => {

    it('deve fornecer crédito para clientes de alto saldo', () => {
      cliente.saldo = 99999.90;
      expect(cliente.creditoPreAprovado).toBe(20000);
    });

    it('não deve fornecer crédito para clientes de baixo saldo', () => {
      cliente.saldo = 9999.90;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

    it('não deve fornecer crédito para clientes de saldo negativo', () => {
      cliente.saldo = -1.00;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

  });

});
