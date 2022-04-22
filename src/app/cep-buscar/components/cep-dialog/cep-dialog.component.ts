import { Component, OnInit } from '@angular/core';
import { Cep } from '../../models/cep';
import { CepApiService } from '../../services/cep-api.service';

@Component({
  selector: 'app-cep-dialog',
  templateUrl: './cep-dialog.component.html',
  styleUrls: ['./cep-dialog.component.css'],
})
export class CepDialogComponent implements OnInit {


  cep: string = '';


buscarcep : Cep  | null = null;

  constructor(private cepService: CepApiService) {}

  ngOnInit(): void {
    this.cepService.findCep(this.cep).subscribe((fCep) => {
      this.buscarcep =  fCep;
      console.log(this.buscarcep);
    }
    )
  }
}
