import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-detalhe-sensor',
  templateUrl: './detalhe-sensor.page.html',
  styleUrls: ['./detalhe-sensor.page.scss'],
})
export class DetalheSensorPage implements OnInit {
  rotinas: any[] = []; // Variável para armazenar as rotinas
  sensor: any;
  sensorId!: number;

  constructor( private Activaterouter: ActivatedRoute, private router: Router, private sensorService: SensorService) { }

  ngOnInit(): void {
    // Pega o parâmetro de rota 'id'
    this.Activaterouter.params.subscribe(params => {
      const id = params['id'];
      this.sensorId = id;
    });
    console.log("ID sensor selecionado: ", this.sensorId);

    // Pegando as informações do sensor
    this.sensorService.PegarSensor(this.sensorId).subscribe(
      (data) => {
        this.sensor = data;
      },
      (error) => {
        console.error("Erro ao exibir sensor: ", error);
      }
    )
  }

  deleteSensor(): void {
      this.sensorService.deleteSensor(this.sensorId).subscribe(
        () => {
          console.log(`Sensor com ID ${this.sensorId} excluído com sucesso.`);
          this.router.navigate(['/home']); // Redireciona para a página inicial após exclusão
        },
        (error) => {
          console.error('Erro ao excluir o sensor:', error);
        }
      );
  }

  navigateToPage() {
    this.router.navigate(['/home']);
  }

  loadSensorDetails() {
    if (this.sensorId !== null) {
      // Lógica para carregar os detalhes do sensor usando o sensorId
      console.log(`Carregar detalhes do sensor com ID: ${this.sensorId}`);
    } else {
      console.error('sensorId inválido');
    }
  }


}
