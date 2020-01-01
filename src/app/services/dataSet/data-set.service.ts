import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {

  private data = {};

  constructor() { }

  setData(key, data) {
    this.data[key] = data;
  }

  getData(key) {
    return this.data[key];
  }
}
