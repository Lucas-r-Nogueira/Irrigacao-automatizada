import { Component, OnInit, Input} from '@angular/core';
import { Sensores } from 'src/app/core/interface/Sensores';

@Component({
  selector: 'app-card-sensor',
  templateUrl: './card-sensor.component.html',
  styleUrls: ['./card-sensor.component.scss'],
})
export class CardSensorComponent  implements OnInit {
  @Input() sensor!: Sensores;

  constructor() { }

  ngOnInit() {}
}
