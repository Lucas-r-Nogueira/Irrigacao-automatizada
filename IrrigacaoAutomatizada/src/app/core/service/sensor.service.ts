import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensores } from '../interface/Sensores';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl: string = 'https://secret-broomstick-6q95wxj6649c5q76-8000.app.github.dev/sensor'; // URL da API Lumen codespace (ramalho)

  constructor(private http: HttpClient) {
    console.log("URL requisitada:", this.apiUrl);
   }

  // Método para buscar todos os sensores
  ListarSensores (): Observable<Sensores[]>{
   return this.http.get<any>(`${this.apiUrl}`);
  }

  // Consultar sensor específico
  PegarSensor (id: number): Observable<Sensores> {
    console.log("Dados do sensor");
    return this.http.get<Sensores>(`${this.apiUrl}/${id}/`);
  }

  // Método para criar um sensor(Funcionando)
  criarSensor(sensor: Sensores): Observable<Sensores> {
    console.log('Dados enviados para criação:', sensor);
    return this.http.post<Sensores>(`${this.apiUrl}/adicionar/`, sensor);
  }

  // Método para deletar um sensor
  deleteSensor(id: number): Observable<Sensores> {
    return this.http.delete<Sensores>(`${this.apiUrl}/${id}`);
  }
}
