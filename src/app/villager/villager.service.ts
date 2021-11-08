import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Villager } from './villager';

@Injectable()
export class VillagerService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getVillagers() {
    let req = this.http.get<any>('https://acnhapi.com/v1/villagers');
    console.log(req);
    return req;
  }
}
