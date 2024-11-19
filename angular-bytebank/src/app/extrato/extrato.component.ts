import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias:Transferencia[];

  constructor(private transferenciaService:TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.consultar().subscribe((transferencias: Transferencia[])=>{
        console.table(transferencias);
        this.transferencias = transferencias;
      });
  }

}
