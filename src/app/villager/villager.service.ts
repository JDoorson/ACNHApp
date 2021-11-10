import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Villager } from './villager';

@Injectable()
export class VillagerService {
  private readonly apiPath: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getVillagers(): Observable<Villager[]> {
    return this.http.get<Villager[]>(`${this.apiPath}/villagers`);
  }

  getVillager(villagerId: number): Observable<Villager> {
    return this.http.get<Villager>(`${this.apiPath}/villagers/${villagerId}`)
  }
}
