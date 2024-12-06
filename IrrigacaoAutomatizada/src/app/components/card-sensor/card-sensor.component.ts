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

  constructor(
    private router : Router,
  ) { }

  ngOnInit() { }

  goToDetail(id: number) {  
    this.router.navigate(['/detalhe-sensor/', id]);
  }

}
