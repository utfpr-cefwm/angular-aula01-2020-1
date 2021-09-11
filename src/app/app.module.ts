import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaSaldoComponent } from './components/consulta-saldo/consulta-saldo.component';
import { ClassNamePorValorPipe } from './pipes/class-name-por-valor.pipe';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ConsultaSaldoComponent,
    ClassNamePorValorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
