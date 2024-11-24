import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit() {}

  
  goToDetail(id: number) {  
    console.log("Id sensor: ", id);
    this.router.navigate(['/detalhe-sensor/', id]);
  }

}
