import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorModule } from '../models/sensor/sensor.module';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = 'http://localhost:8000/api/sensores'
  constructor(private http: HttpClient) { }

  // Método para pegar todos os sensores
  getSensores() : Observable<SensorModule[]>{
    return this.http.get<SensorModule[]>(this.apiUrl);
  }

  // Método para pegar um sensor pelo ID
  getSensor(id : number): Observable<SensorModule>{
    return this.http.get<SensorModule>(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo sensor
  createSensor(sensor: SensorModule): Observable<SensorModule>{
    return this.http.post<SensorModule>(this.apiUrl, sensor);
  }

  // Método para atualizar um sensor
  updateSensor(id: number, sensor: SensorModule): Observable<SensorModule>{
    return this.http.put<SensorModule>(`${this.apiUrl}/${id}`, sensor);
  }

  // Método para deletar um sensor
  deleteSensor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  } 

}
