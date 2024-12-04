import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-card-sensor',
  templateUrl: './card-sensor.component.html',
  styleUrls: ['./card-sensor.component.scss'],
})
export class CardSensorComponent  implements OnInit {
  @Input() data: any; // Recebe dados de um sensor
  umidade!: number; // Para armazenar o valor da umidade

  constructor(
    private router : Router,
    private sensorService: SensorService // Injeção do serviço
  ) { }

  ngOnInit() {
    this.carregarUmidade();
  }

  goToDetail(id: number) {  
    console.log("Id sensor: ", id);
    this.router.navigate(['/detalhe-sensor/', id]);
  }
  carregarUmidade() {
    this.sensorService.obterUmidade().subscribe(
      (dataUmidade) => {
        console.log('Dados de umidade recebidos:', dataUmidade);
        this.data.ultima_leitura = dataUmidade.umidade; // Atualiza o atributo 'ultima_leitura' com o valor da umidade
      },
      (error) => {
        console.error('Erro ao obter umidade:', error);
        this.data.ultima_leitura = null; // Define como null em caso de erro
      }
    );
  }

}
