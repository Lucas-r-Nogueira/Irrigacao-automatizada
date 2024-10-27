import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router, private platform: Platform) {}

  ngOnInit() {
    // Espera 3 segundos antes de redirecionar
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.router.navigate(['/home']); // Redireciona para a página home
      }, 4000); // 3000 milissegundos = 3 segundos
    });
  }
}
