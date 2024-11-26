import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Rotinas } from '../interface/Rotina';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {

  private apiUrl: string = 'https://secret-broomstick-6q95wxj6649c5q76-8000.app.github.dev/rotina'
  private apiUrlsensor: string = 'https://secret-broomstick-6q95wxj6649c5q76-8000.app.github.dev/sensor'

  constructor(private http: HttpClient) {
    console.log("URL requisitada(Rotina):", this.apiUrl);
  }

  // Método para criar Rotina
  criarRotina(rotina: Rotinas): Observable<Rotinas> {
    console.log("Dados enviados para a criação(Rotina): ", rotina);
    return this.http.post<Rotinas>(`${this.apiUrl}/adicionar/`, rotina);
  }

  // Método Deletar rotina
  deleteRotina(id: number): Observable<Rotinas> {
    return this.http.delete<Rotinas>(`${this.apiUrl}/${id}`);
  }

  // Método listar Rotinas
  listarRotinasPorSensor(sensorId: number) {
    return this.http.get<any>(`${this.apiUrlsensor}/${sensorId}/rotinas`).pipe(
      map(sensor => sensor.routines) // Acessa o atributo 'routines' do sensor
    );
  }
  

  // Método para editar (atualizar) uma rotina
  editarRotina(id: number, dadosAtualizados: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/editar/${id}`, dadosAtualizados);
  }
}
