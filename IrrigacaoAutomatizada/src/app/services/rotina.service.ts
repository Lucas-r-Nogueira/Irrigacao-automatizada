import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RotinaModule } from '../models/rotina/rotina.module';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {
  private apiUrl = "http://localhost:800/api/rotinas"
  constructor(private http: HttpClient) { }

  // Método para pegar todos as rotinas
  getRotinas() : Observable<RotinaModule[]>{
    return this.http.get<RotinaModule[]>(this.apiUrl);
  }

  // Métodos para pegar uma rotina pelo ID
  getRotina(id : number): Observable<RotinaModule>{
    return this.http.get<RotinaModule>(`${this.apiUrl}/${id}`);
  }

  // Métodos para criar uma nova rotina
  createRotina(rotina: RotinaModule): Observable<RotinaModule>{
    return this.http.post<RotinaModule>(this.apiUrl, rotina);
  }

  // Método para atualizar uma rotina
  updateRotina(id: number, rotina: RotinaModule): Observable<RotinaModule>{
    return this.http.put<RotinaModule>(`${this.apiUrl}/${id}`, rotina);
  }

  // Método para deletar uma rotina
  deleteRotina(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
