import { Lists } from './../../models/lists.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class ListsDaoProvider {

  lists:Lists[] = [];
  
  constructor(private storage:Storage) {
    this.start();
  }

  public start(){
    this.storage.get("Lists").then((value) => {
      if(value){
        this.lists = value;
      }else{
        this.storage.set("Lists", this.lists);
      }
    });
  }

  public insert(list:Lists){
    this.lists.push(list);
    this.save("Lists", this.lists);
  }

  public update(value:any){
    this.storage.set("Lists", value);
  }

  public remove(index:number){
    this.lists.splice(index,1);
    this.update(this.lists);
  }

  public clear(){
    this.storage.remove("Lists");
  }

  public save(key:string, lists:Lists[]){
    this.storage.set(key, lists);
  }

  public getAll(variable:any){
    // this.storage.forEach((value:any, key:string, itarator:number) => {
    //   variable.key = key;
    //   variable.value = value;

    // }).then(() => {
    //   return Promise.resolve(variable);
    // }).catch((error) => {
    //   return Promise.reject(error);
    // });
  }

  public reset(){
    this.storage.clear().then((value) => {
      console.log("Banco Apagado!!!");
    });
  }

}
