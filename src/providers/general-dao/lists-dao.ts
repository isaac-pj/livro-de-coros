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

  public save(key:string, lists:Lists[]){
    this.storage.set(key, lists);
  }

  public insert(list:Lists){
    this.lists.unshift(list);
    this.save("Lists", this.lists);
  }

  public update(index:number, list:Lists){
    this.lists[index] = list;    
    this.save("Lists", this.lists);
  }

  public remove(index:number){
    this.lists.splice(index,1);
    this.save("Lists", this.lists);
  }

  // public getAll(variable:any){
    // this.storage.forEach((value:any, key:string, itarator:number) => {
    //   variable.key = key;
    //   variable.value = value;

    // }).then(() => {
    //   return Promise.resolve(variable);
    // }).catch((error) => {
    //   return Promise.reject(error);
    // });
  // }

  public clear(){
    this.storage.remove("Lists");
  }

  public reset(){
    this.storage.clear().then((value) => {
      console.log("Banco Apagado!!!");
    });
  }

}
