import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RotinaService } from 'src/app/core/service/rotina.service';
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

  constructor( 
    private Activaterouter: ActivatedRoute, 
    private router: Router, 
    private sensorService: SensorService,
    private rotinaService: RotinaService,
  ) { }

  ngOnInit(): void {
    this.fetchRotina();

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
    this.carregarRotinas(); // Carregar as rotinas ao inicializar
  }

  deleteSensor(): void {
    this.sensorService.deleteSensor(this.sensorId).subscribe(
      () => {
        console.log('Sensor com ID ${this.sensorId} excluído com sucesso.');
        this.router.navigate(['/home']); // Redireciona para a página inicial após exclusão
      },
      (error) => {
        console.error('Erro ao excluir o sensor:', error);
      }
    );
  }

  excluirRotina(rotinaId: number) {
    if (confirm('Tem certeza que deseja excluir esta rotina?')) {
      this.rotinaService.deleteRotina(rotinaId).subscribe(
        () => {
          console.log('Rotina excluída com sucesso.');
          this.carregarRotinas(); // Atualiza a lista de rotinas
        },
        (error) => {
          console.error('Erro ao excluir rotina:', error);
        }
      );
    }
  }
  

  fetchRotina(): void {
    this.rotinaService.listarRotinasPorSensor(this.sensorId).subscribe(
      (data) => {
        this.rotinas = data;
      },
      (error) => {
        console.error("Erro ao buscar sensores: ", error);
      }
    );
  }

  carregarRotinas() {
    this.rotinaService.listarRotinasPorSensor(this.sensorId).subscribe(
      (data) => {
        this.rotinas = data;
      },
      (error) => {
        console.error('Erro ao carregar rotinas:', error);
      }
    );
  }

  navigateToPage() {
    this.router.navigate(['/home']);
  }

  loadSensorDetails() {
    if (this.sensorId !== null) {
      console.log('Carregar detalhes do sensor com ID: ${this.sensorId}');
    } else {
      console.error('sensorId inválido');
    }
  }

  // Método chamado quando uma rotina é criada
  onRotinaCriada() {
    this.fetchRotina(); // Atualiza a lista de rotinas automaticamente
  }

  onRotinaExcluida(rotinaId: number) {
    this.rotinas = this.rotinas.filter(rotina => rotina.id !== rotinaId);
    console.log(`Rotina com ID ${rotinaId} removida da lista.`);
  }
}
