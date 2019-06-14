import { Songs } from './../../models/songs.model';
import { SongsService } from './../../services/songs.service';
import { Injectable } from '@angular/core';

// import { Storage } from '@ionic/storage';
import { DataStorageProvider } from '../data-storage/data-storage';

/*
  Generated class for the FavoritesDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsDaoProvider {

  // //inicializa a primeira vez pegando do arquivo
  // start(){
  //   // this.storage.get("Songs").then((value) => {
  //   //   if(value){
  //   //     this.songs = value;
  //   //   }else{
  //   //     this.songs = this.songsService.getSongs();
  //   //     this.storage.set("Songs", this.songs);
  //   //   }
  //   // });
  // }
  
  private songs:Songs[] = [];
  
  constructor(
    private dataStorageProvider: DataStorageProvider,
    public songsService: SongsService) {}

  // #ACTIONS

  // retorna todos os coros this.update() aqui gera loop infinito
  getSongs() {
    return this.songs;
  }

  //recebe um indice e retorno o coro correspondente
  getSong(index: number) {
    return (this.songs[index]);
  }
  
  //atualiza a lista de musicas
  update(){
    return this.dataStorageProvider.get("Songs").then(
      (songs) => this.songs = songs);
  }

  // grava uma música favorita no banco
  public favorit(index:number){
    this.songs[index].favorit = !this.songs[index].favorit;
    return this.dataStorageProvider.insert("Songs", this.songs)
    .then(() => this.update());
  } 

  //apaga a chave Songs
  public clear(){
    this.dataStorageProvider.remove("Songs");
  }

  // #SEARCH
  isDuplicated(searchResult:Array<Songs>, song:Songs){
    let test = false;
    for(let i in searchResult){
      test = searchResult[i].ID == song.ID ? true : test;
    }
    return test;
  }

  isValid(value){
    return value && value.trim() !== '' ? true : false;
  }

  //retorno o resultado de uma busca que bater com o numero passado
  searchByNumber(value:number){
    if(!this.isValid(value)) return this.songs;
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
    if(!this.isValid(value)) return this.songs;
    let searchResult:Songs[] = [];
    
    for(let i in this.songs){
      if(this.songs[i].titulo.toLowerCase().indexOf(value.toLowerCase()) != -1 ||
      this.songs[i].numero.toString().indexOf(value.toLowerCase()) != -1){
        searchResult.push(this.getSong(parseInt(i)));
      }
    }

    for(let i in this.songs){
      if(JSON.stringify(this.songs[i].letra).toLowerCase().indexOf(value.toLowerCase()) != -1
      && !this.isDuplicated(searchResult, this.songs[i])){
        searchResult.push(this.getSong(parseInt(i)));
      }
    }

    return searchResult.length > 0 ? searchResult : [];
  }

}
