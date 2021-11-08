import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class CollectableService {
  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get<any>('https://acnhapi.com/v1/bugs');
  }

  getBug(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/bugs/{id}');
  }

  getFishes() {
    return this.http.get<any>('https://acnhapi.com/v1/fish');
  }

  getFish(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/fish/{id}');
  }

  getFossils() {
    return this.http.get<any>('https://acnhapi.com/v1/fossils');
  }

  getFossil(name: string) {
    return this.http.get<any>('https://acnhapi.com/v1/fossils/{name}');
  }
}
