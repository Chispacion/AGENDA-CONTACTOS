import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contacto {
  id?: number;
  nombre: string;
  telefono: string;
  email: string;
  categoria: string;
  notas: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:3000/contactos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }

  create(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.apiUrl, contacto);
  }

  update(id: number, contacto: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(`${this.apiUrl}/${id}`, contacto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}