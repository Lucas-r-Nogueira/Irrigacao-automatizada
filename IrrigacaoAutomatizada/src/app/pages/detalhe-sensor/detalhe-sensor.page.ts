import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-sensor',
  templateUrl: './detalhe-sensor.page.html',
  styleUrls: ['./detalhe-sensor.page.scss'],
})
export class DetalheSensorPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage() {
    this.router.navigate(['/home']); // Substitua '/outra-pagina' pelo caminho desejado
  }

}
