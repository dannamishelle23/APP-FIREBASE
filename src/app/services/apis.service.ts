import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApisService {
  constructor(private http: HttpClient) {}

  // API para generar un chiste
  getJoke() {
    return this.http.get('https://v2.jokeapi.dev/joke/Any?lang=es');
  }

  // API para generar imagen de un gato
  getCat() {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }

  // API para generar imagen de un perro
  getDog() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
