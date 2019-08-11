import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataStorageProvider {

  constructor(public storage:Storage) {
    console.log('Hello DataStorageProvider Provider');
  }

  public insert (key:string, value: any){
    return this.save(key, value)
  }

  public update (key:string, value:any){
    return this.save(key, value)
  }

  private save (key:string, value:any){
    return this.storage.set(key, value);
  }

  public get(key:string){
   return this.storage.get(key);
  }

  public remove (key:string){
    return this.storage.remove(key)
  }

  public clear(){
    return this.storage.clear();
  }

}
