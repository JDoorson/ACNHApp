import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Art } from './art';
import { Houseware } from './houseware';
import { Wallmounted } from './wallmounted';
import { Misc } from './misc';

@Injectable()
export class ItemService {
  private readonly apiPath: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllArt(): Observable<Art[]> {
    return this.http.get<Art[]>(
      `${this.apiPath}/art`);
  }

  getArt(artId: number): Observable<Art> {
    return this.http.get<Art>(
      `${this.apiPath}/art/${artId}`);
  }

  getAllHouseware(): Observable<Houseware[]> {
    return this.http.get<Houseware[]>(
      `${this.apiPath}/houseware`);
  }

  getHouseware(housewareId: number): Observable<Houseware> {
    return this.http.get<Houseware>(
      `${this.apiPath}/houseware/${housewareId}`);
  }

  getAllWallmounted(): Observable<Wallmounted[]> {
    return this.http.get<Wallmounted[]>(
      `${this.apiPath}/wallmounted`);
  }

  getWallmounted(wallmountedId: number): Observable<Wallmounted> {
    return this.http.get<Wallmounted>(
      `${this.apiPath}/wallmounted/${wallmountedId}`);
  }

  getAllMisc(): Observable<Misc[]> {
    return this.http.get<Misc[]>(
      `${this.apiPath}/misc`);
  }

  getMisc(miscId: number): Observable<Misc> {
    return this.http.get<Misc>(
      `${this.apiPath}/misc/${miscId}`);
  }
 }
