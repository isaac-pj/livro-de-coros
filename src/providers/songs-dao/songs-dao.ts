import { Songs } from './../../models/songs.model';
import { SongsService } from './../../services/songs.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavoritesDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsDaoProvider {
  
  songs:Songs[] = [];
  
  constructor(private storage:Storage, public songsService: SongsService) {
      this.start();
  }

  //inicializa a primeira vez pegando do arquivo
  start(){
    this.storage.get("Songs").then((value) => {
      if(value){
        this.songs = value;
      }else{
        this.songs = this.songsService.getSongs();
        this.storage.set("Songs", this.songs);
      }
    });
  }

  //recebe uma chave e salva algo no banco de dados
  public save(key:string, value:any[]){
    this.storage.set(key, value);
  }

  //apaga a chave Songs
  public clear(){
    this.storage.remove("Songs");
  }

  //apaga todo o banco de dados
  public reset(){
    this.storage.clear().then((value) => {
      console.log("Banco Apagado!!!");
    });
  }

  // retorna todos os coros
  getSongs() {
    return this.songs;
  }

  //recebe um indice e retorno o coro correspondente
  getSong(index: number) {
    return (this.songs[index]);
  }

  //retorno o resultado de uma busca que bater com o numero passado
  searchByNumber(value:number){
    let searchResult:Songs[] = [];
    
    for(let i in this.songs){
      if(this.songs[i].numero.toString().indexOf(value.toString()) != -1){
        searchResult.push(this.getSong(parseInt(i)));
      }
    }

    return searchResult;
  }

  //retorno o resultado de uma busca que bater com a string passada  
  searchByString(value:string){
    let searchResult:Songs[] = [];
    
    for(let i in this.songs){
      if(this.songs[i].titulo.toLowerCase().indexOf(value.toLowerCase()) != -1){
        searchResult.push(this.getSong(parseInt(i)));
      }
    }

    for(let i in this.songs){
      if(JSON.stringify(this.songs[i].letra).toLowerCase().indexOf(value.toLowerCase()) != -1){
        searchResult.push(this.getSong(parseInt(i)));
      }
    }

    // if(searchResult.length > 0){
    //   return searchResult;
    // }else{
    //   for(let i in this.songs){
    //     if(JSON.stringify(this.songs[i].letra).toLowerCase().indexOf(value.toLowerCase()) != -1){
    //       searchResult.push(this.getSong(parseInt(i)));
    //     }
    //   }
    // }

    if(searchResult.length > 0){
      return searchResult;
    }

  }

  //inicializa um vetor com o valor recebido
  inicialize(vector:any[], size:number, value:any){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }

  public favorit(index:number,favorit:boolean){
    this.songs[index].favorit = this.songs[index].favorit ? false : true;
    this.save("Songs", this.songs);
  }

}
