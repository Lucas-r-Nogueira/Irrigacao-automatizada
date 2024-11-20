import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensores } from '../interface/Sensores';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = 'http://localhost:8000/api/sensors'; // URL da API Laravel

  constructor(private http: HttpClient) { }

  // Método para criar um sensor
  createSensor(Sensores: Sensores): Observable<Sensores> {
    return this.http.post<Sensores>(this.apiUrl, Sensores);
  }

  // Método para buscar todos os sensores
  getSensors(): Observable<Sensores[]> {
    return this.http.get<Sensores[]>(this.apiUrl);
  }

  // Método para deletar um sensor
  deleteSensor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/sensors/${id}`);
  }
}
