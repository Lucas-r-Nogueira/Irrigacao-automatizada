import { Component, OnInit } from '@angular/core';
import { Sensores } from 'src/app/core/interface/Sensores';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sensors: Sensores[] = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.loadSensors(); // Carrega os sensores ao abrir a página
  }

  loadSensors(): void {
    this.sensorService.getSensors().subscribe({
      next: (data) => (this.sensors = data),
      error: (err) => console.error('Erro ao carregar sensores:', err),
    });
  }

}
