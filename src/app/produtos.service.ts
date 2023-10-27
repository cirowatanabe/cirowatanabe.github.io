import { Injectable } from '@angular/core';
import { Produto } from './produtos/produto';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string = 'http://localhost:8080/produtos'

  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get<Produto[]>(this.apiURL);
  }
}
