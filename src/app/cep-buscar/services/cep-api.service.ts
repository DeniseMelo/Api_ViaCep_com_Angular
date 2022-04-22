import { Cep } from './../models/cep';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CepApiService {


  private readonly  baseUrl: string="http://viacep.com.br/ws"


  constructor(
    private http: HttpClient


  ) { }

  findCep(cep: string): Observable<Cep> {
  return this.http.get<Cep>(`${this.baseUrl}/${cep}/json/`)

  }
}
