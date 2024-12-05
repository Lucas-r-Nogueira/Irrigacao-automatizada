import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sensores: any[] = []; // Variável para armazenar os sensores
  historicoIrrigacao: any[] = []; // Variável para armazenar o histórico de irrigação
  sensorSelecionado: number = 0; // ID do sensor selecionado

  constructor(private dadosSensor: SensorService) { }

  ngOnInit(): void {
    this.fetchSensores();
    this.carregarSensores();

    // Se inscreve para escutar a exclusão de sensor e atualizar a lista
    this.dadosSensor.onSensorDeleted().subscribe(() => {
      this.carregarSensores();
    });
  }

  fetchSensores(): void {
    this.dadosSensor.ListarSensores().subscribe(
      (data) => {
        this.sensores = data;
      },
      (error) => {
        console.error("Erro ao buscar sensores: ", error);
      }
    );
  }

  carregarSensores() {
    this.dadosSensor.ListarSensores().subscribe(
      (data) => {
        this.sensores = data;
      },
      (error) => {
        console.error('Erro ao carregar sensores', error);
      }
    );
  }

  // Método chamado quando um sensor é selecionado no select
  onSensorSelecionado(sensorId: number): void {
    console.log('ID do sensor selecionado:', sensorId);
    this.carregarIrrigacoes(sensorId); // Chama o método para carregar as irrigações
  }

  // Método chamado quando um sensor é criado
  onSensorCriado() {
    this.fetchSensores(); // Atualiza a lista de sensores
  }

  // Método para carregar o histórico de irrigações do sensor
  carregarIrrigacoes(sensorId: number): void {
    this.dadosSensor.listarIrrigacoesPorSensor(sensorId).subscribe({
      next: (irrigacoes) => {
        this.historicoIrrigacao = irrigacoes; // Atualiza o array de histórico
        console.log('Irrigações carregadas:', this.historicoIrrigacao);
      },
      error: (err) => {
        console.error('Erro ao carregar irrigações:', err);
      }
    });
  }

}
