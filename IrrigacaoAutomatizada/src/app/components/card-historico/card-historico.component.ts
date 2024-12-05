import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-historico',
  templateUrl: './card-historico.component.html',
  styleUrls: ['./card-historico.component.scss'],
})
export class CardHistoricoComponent implements OnInit {
  @Input() data: any; // Dados recebidos do pai  

  constructor() {}

  ngOnInit(): void {}

  // Função para formatar a data no formato brasileiro (DD-MM-AAAA)
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
