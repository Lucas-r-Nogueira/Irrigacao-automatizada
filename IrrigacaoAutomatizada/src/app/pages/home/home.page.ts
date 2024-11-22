import { Component, OnInit } from '@angular/core';
import { Sensores } from 'src/app/core/interface/Sensores';
import { SensorService } from 'src/app/core/service/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sensores: Sensores[] = [];
  constructor(private sensorService: SensorService) { }

  ngOnInit(){
    this.sensorService.ListarSensores().subscribe(
      (response) => {
        this.sensores = response;
        console.log("Lista de sensores",this.sensores);

      },
      (error) => {console.error("ERRO: ", error);}
    )
  }

}
