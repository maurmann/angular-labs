import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.models';

// provided in root indice que o servico pode ser injetado em qualquer componente ou modulo da aplicacao
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  consultar() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) {
    this.adicionarTimestamp(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  adicionarTimestamp(transferencia: any) {
    transferencia.data = new Date();
  }
}
