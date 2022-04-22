import { Component, OnInit } from '@angular/core';
import { CepApiService } from '../../services/cep-api.service';

@Component({
  selector: 'app-cep-dialog',
  templateUrl: './cep-dialog.component.html',
  styleUrls: ['./cep-dialog.component.css'],
})
export class CepDialogComponent implements OnInit {


  cep: string = '';
  logradouro: string='';
  complemento: string='';
  bairro: string='';
  localidade: string='';
  uf: string='';
  unidade: string='';


  constructor(private cepService: CepApiService) {}

  ngOnInit(): void {
    this.cepService.findCep(this.cep).subscribe((fCep) => {
      console.log(fCep);
    }
    )
  }
}
