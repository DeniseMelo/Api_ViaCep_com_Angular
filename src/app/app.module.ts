import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CepBuscarModule } from './cep-buscar/cep-buscar.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CepBuscarModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
