import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-historico',
  templateUrl: './card-historico.component.html',
  styleUrls: ['./card-historico.component.scss'],
})
export class CardHistoricoComponent  implements OnInit {
  @Input() data: any; // Dados recebidos do pai  
  constructor() { }

  ngOnInit(): void {}

}
