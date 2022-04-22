import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CepHomeComponent } from './components/cep-home/cep-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CepDialogComponent } from './components/cep-dialog/cep-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CepApiService } from './services/cep-api.service';



@NgModule({
  declarations: [
    CepHomeComponent,
    CepDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [
    CepHomeComponent
  ],
  providers:[
    CepApiService
  ]
})
export class CepBuscarModule { }

