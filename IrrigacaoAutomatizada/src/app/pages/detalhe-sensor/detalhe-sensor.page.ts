import { Component, OnInit } from '@angular/core';
import { RotinaService } from 'src/app/core/service/rotina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-sensor',
  templateUrl: './detalhe-sensor.page.html',
  styleUrls: ['./detalhe-sensor.page.scss'],
})
export class DetalheSensorPage implements OnInit {
  rotinas: any[] = []; // Variável para armazenar as rotinas
  constructor(private rotinaService: RotinaService, private router: Router) { }

  ngOnInit(): void {
    this.fetchRotinas();
  }

  // Método para buscar as rotinas
  fetchRotinas(): void {
    this.rotinaService.listarRotinas().subscribe(
      (data) => {
        this.rotinas = data;
      },
      (error) => {
        console.error('Erro ao buscar rotinas:', error);
      }
    );
  }

  navigateToPage() {
    this.router.navigate(['/home']); // Substitua '/outra-pagina' pelo caminho desejado
  }


}
