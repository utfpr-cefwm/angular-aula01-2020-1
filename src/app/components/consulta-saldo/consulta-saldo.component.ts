import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css'],
})
export class ConsultaSaldoComponent implements OnInit {

  public confs = {
    classePositivo: 'verde',
    classeNegativo: 'vermelho',
  };

  public cliente: Cliente = new Cliente(
    14,
    'Francisco das Torres',
    1.50,
    new Date(),
  );

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
