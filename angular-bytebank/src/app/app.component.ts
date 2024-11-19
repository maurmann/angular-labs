import { Component } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.models';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {

  }

  transferir($event) {
    console.log($event);

    // O operador ... desmembra o objeto e suas propriedades, assim estamos passando por parametro cada uma das propriedades mais a data
    //const transferencia = {...$event, data: new Date()}
    //this.transferencias.push(transferencia);

  this.transferenciaService.adicionar($event);

  }
}
