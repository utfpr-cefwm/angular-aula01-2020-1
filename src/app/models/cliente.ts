export class Cliente {

  constructor(
    public id: number,
    public nome: string,
    public saldo: number,
    public ultimoLogin: Date,
  ) {
  }

  /**
   * Disponibiliza crédito pré-aprovado para clientes de alto saldo.
   */
  public get creditoPreAprovado(): number {
    return this.saldo >= 10000
    ? 20000
    : 0;
  }

}
