import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Sensores } from '../interface/Sensores';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  // private apiUrl: string = 'https://literate-space-engine-g99766vvgrrhwg4p-8000.app.github.dev/sensor'; // URL da API Lumen codespace (Daniel)
  private apiUrl: string = 'https://secret-broomstick-6q95wxj6649c5q76-8000.app.github.dev/sensor'; // URL da API Lumen codespace (ramalho)
  private sensorDeletedSubject = new Subject<void>();  // Subject para notificar quando um sensor for excluído

  constructor(private http: HttpClient) {
    console.log("URL requisitada(Sensor):", this.apiUrl);
  }

  // Método para criar um sensor
  criarSensor(sensor: Sensores): Observable<Sensores> {
    console.log('Dados enviados para criação(Sensor):', sensor);
    return this.http.post<Sensores>(`${this.apiUrl}/adicionar/`, sensor);
  }

  // Método para listar todos os sensores
  ListarSensores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Método Consultar sensor específico
  PegarSensor(id: number): Observable<Sensores> {
    console.log("Dados do sensor");
    return this.http.get<Sensores>(`${this.apiUrl}/${id}/`);
  }

  // Método pegar rotinas do sensor
  pegarRotinas(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/rotinas`);
  }

  // Método para deletar um sensor
  deleteSensor(id: number): Observable<Sensores> {
    return this.http.delete<Sensores>(`${this.apiUrl}/${id}`).pipe(
      // Após a exclusão do sensor, notificamos que o sensor foi excluído
      tap(() => this.sensorDeletedSubject.next())
    );
  }

  // Método para atualizar um sensor existente
  atualizarSensor(id: number, sensor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/`, sensor);
  }

  // Método para se inscrever na notificação de exclusão de sensor
  onSensorDeleted(): Observable<void> {
    return this.sensorDeletedSubject.asObservable();
  }
}
