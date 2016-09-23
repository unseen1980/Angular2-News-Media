import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://newsapi.org/v1';
    this.apiKey = '39677eb4384848699f8f018d5d4beff7';
  }

  fetchSources(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sources`)
      .map(response => response.json());
  }

  fetchArticles(source): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles?source=${source}&apiKey=${this.apiKey}`)
      .map(response => response.json());
  }

}
