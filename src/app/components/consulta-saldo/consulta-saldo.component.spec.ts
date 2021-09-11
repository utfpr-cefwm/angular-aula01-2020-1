import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNamePorValorPipe } from 'src/app/pipes/class-name-por-valor.pipe';
import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {

  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConsultaSaldoComponent,
        ClassNamePorValorPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
