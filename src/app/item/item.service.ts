import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) { }

  getAllArt() {
    return this.http.get<any>('https://acnhapi.com/v1/art');
  }

  getArt(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/art/{id}');
  }

  getAllHouseware() {
    return this.http.get<any>('https://acnhapi.com/v1/houseware');
  }

  getHouseware(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/houseware/{id}');
  }

  getAllWallmounted() {
    return this.http.get<any>('https://acnhapi.com/v1/wallmounted');
  }

  getWallmounted(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/wallmounted{id}');
  }

  getAllMisc() {
    return this.http.get<any>('https://acnhapi.com/v1/misc');
  }

  getMisc(id: number) {
    return this.http.get<any>('https://acnhapi.com/v1/misc/{id}');
  }
 }
