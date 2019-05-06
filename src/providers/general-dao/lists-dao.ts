import { List } from '../../models/list.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class ListsDaoProvider {

  lists:List[] = [];
  
  //inicializa o arquivo
  constructor(private storage:Storage) {
    this.start();
  }

  // verifica se os dados já existem 
  // no banco se sim, ele os busca
  // se não, cria e depois busca
  public start(){
    this.storage.get("Lists").then((value) => {
      if(value){
        this.lists = value;
      }else{
        this.storage.set("Lists", this.lists);
      }
    });
  }

  //grava dados no banco a partir 
  // de uma chave e um valor
  public save(key:string, lists:List[]){
    this.storage.set(key, lists);
  }

  //inseri dados na lista
  public insert(list:List){
    this.lists.unshift(list);
    this.save("Lists", this.lists);
  }

  // atualiza algo na lista
  public update(index:number, list:List){
    this.lists[index] = list;    
    this.save("Lists", this.lists);
  }

  // remove algo da lista
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

  // apaga todas as listas
  public clear(){
    this.storage.remove("Lists");
  }

  // reseta todas as configurações do app
  public reset(){
    this.storage.clear().then((value) => {
      console.log("Banco Apagado!!!");
    });
  }

}
