import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({ providedIn: 'root' })
export class DataStorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello DataStorageProvider Provider');
  }

  public async insert(key: string, value: any) {
    console.log('gravou no banco!');
    return await this.save(key, value);
  }

  public async update(key: string, value: any) {
    return await this.save(key, value);
  }

  private async save(key: string, value: any) {
    return await this.storage.set(key, value);
  }

  public async get(key: string) {
    console.log('recuperou do banco!');
    return await this.storage.get(key);
  }

  public async remove(key: string) {
    return await this.storage.remove(key);
  }

  public async clear() {
    return await this.storage.clear();
  }

}
