import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RotinaService } from 'src/app/core/service/rotina.service';

@Component({
  selector: 'app-card-rotina',
  templateUrl: './card-rotina.component.html',
  styleUrls: ['./card-rotina.component.scss'],
})
export class CardRotinaComponent  implements OnInit {
  @Input() data: any; // Recebe os dados de uma rotina
  @Output() rotinaExcluida = new EventEmitter<number>(); // Emite o ID da rotina excluída

  constructor(
    private rotina : RotinaService,
  ) { }

  ngOnInit() {}

  excluirRotina() {
      this.rotina.deleteRotina(this.data.id).subscribe(
        () => {
          console.log('Rotina excluída com sucesso.');
          this.rotinaExcluida.emit(this.data.id); // Emite o ID da rotina excluída
        },
        (error) => {
          console.error('Erro ao excluir rotina:', error);
        }
      );
  }
}
