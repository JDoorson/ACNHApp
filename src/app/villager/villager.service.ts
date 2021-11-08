import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Villager } from './villager';

@Injectable()
export class VillagerService {
  constructor(private http: HttpClient) { }

  getVillagers() {
    return this.http.get<any>('https://acnhapi.com/v1/villagers');
  }
}
