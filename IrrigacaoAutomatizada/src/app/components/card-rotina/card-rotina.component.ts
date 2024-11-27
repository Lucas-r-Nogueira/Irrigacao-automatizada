import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RotinaService } from 'src/app/core/service/rotina.service';

@Component({
  selector: 'app-card-rotina',
  templateUrl: './card-rotina.component.html',
  styleUrls: ['./card-rotina.component.scss'],
})
export class CardRotinaComponent implements OnInit {
  @Input() data: any; // Recebe os dados de uma rotina
  @Output() rotinaExcluida = new EventEmitter<number>(); // Emite o ID da rotina excluída
  
  diasAtivacaoFormatados: string = ''; // Para armazenar os dias convertidos

  constructor(private rotina: RotinaService) { }

  ngOnInit() {
    // Converte os dias de ativação (0 e 1) em nomes dos dias ao inicializar
    if (this.data.dias_de_ativacao) {
      this.diasAtivacaoFormatados = this.converterDiasParaNomes(this.data.dias_de_ativacao);
    }
  }

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

  converterDiasParaNomes(dias: string): string {
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'];

    // Filtra os dias com '1' na string e retorna os nomes correspondentes
    const diasSelecionados = dias
      .split('') // Converte a string em um array
      .map((valor, index) => (valor === '1' ? diasSemana[index] : null)) // Substitui '1' pelo nome do dia
      .filter(dia => dia !== null); // Remove os valores 'null'

    return diasSelecionados.join(', ');
  }
}
