import { Injectable } from '@angular/core';
import { DataStorageProvider } from '../data-storage/data-storage';
import { Songs } from '../../models/songs.model';
import { SongsService } from '../../services/songs.service';

/*
  Generated class for the SetupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetupProvider {
  
  private songs: Array<Songs>;

  constructor(
    public dataStorageProvider: DataStorageProvider,
    private songsService: SongsService
  ) {
    console.log('Hello SetupProvider Provider');
    // this.start();
  }
  
  //inicializa a primeira vez pegando do arquivo
  start(){
    this.check();
  }

  check(){
    console.log('Hello check');
    this.dataStorageProvider.get("Songs").then((value)=>{
      if(!value) this.populate()
    }).catch((error)=>{
      console.log(error)
    })
  }

  populate(){
    console.log('não tem dados')
    this.songs = this.songsService.getSongs();
    this.dataStorageProvider.insert("Songs", this.songs);
    // alert('populou!')
  }
}
