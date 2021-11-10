import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class CollectableService {
  private readonly apiPath: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get<any>(
      `${this.apiPath}/bugs`);
  }

  getBug(bugId: number) {
    return this.http.get<any>(
      `${this.apiPath}/bugs/${bugId}`);
  }

  getFishes() {
    return this.http.get<any>(
      `${this.apiPath}/fish`);
  }

  getFish(fishId: number) {
    return this.http.get<any>(
      `${this.apiPath}/fish/${fishId}`);
  }

  getFossils() {
    return this.http.get<any>(
      `${this.apiPath}/fossils`);
  }

  getFossil(fossilName: string) {
    return this.http.get<any>(
      `${this.apiPath}/fossils/${fossilName}`);
  }
}
