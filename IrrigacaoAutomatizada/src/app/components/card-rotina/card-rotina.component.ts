import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RotinaService } from 'src/app/core/service/rotina.service';

@Component({
  selector: 'app-card-rotina',
  templateUrl: './card-rotina.component.html',
  styleUrls: ['./card-rotina.component.scss'],
})
export class CardRotinaComponent  implements OnInit {
  @Input() data: any; // Recebe os dados de uma rotina

  constructor(
    private rotina : RotinaService,
  ) { }

  ngOnInit() {}

  rotinaDelete(id: number){
    this.rotina.deleteRotina(id).subscribe(
      () => {
        console.log(`Sensor com ID ${id} deletado com sucesso.`);
      },
      (error) => {
        console.error('Erro ao deletar sensor:', error);
      }
    )
  }
}
