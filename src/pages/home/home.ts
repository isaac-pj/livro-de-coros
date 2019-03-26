import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { Storage } from '@ionic/storage';
import { SelectPage } from './../select/select';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { RightNavPage } from './../right-nav/right-nav';
import { SongsService } from './../../services/songs.service';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { Songs } from './../../models/songs.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('searchbar') searchbar;
  
  searching:boolean = false;
  type:string = "text";
  placeHolder:string = "Search";
  songs:Songs[] = [];
  list:Songs[] = [];

  constructor(
    public listsDaoProvider: ListsDaoProvider, 
    public storage: Storage, 
    public songsDao: SongsDaoProvider, 
    public modalCtrl: ModalController, 
    public navCtrl: NavController,
    public songsService: SongsService
  ) {
    // this.listsDaoProvider.reset();
    // this.songsService.changeSongs();
    this.start();
  }

  // start(){
  //   this.songs = this.songsDao.getSongs();
  //   return this.songs;
  // }

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

  // ajustes do front na busca
  search(type:number){
    if(type == null){
      this.searching = false;
      this.songs = this.songsDao.getSongs();
    }else{
      this.searching = true;
    }

    if(type == 1){
      this.type = "number";
      this.placeHolder = "Digite o numero:";
    }else if(type == 2){
      this.type = "text";
      this.placeHolder = "Digite o nome ou um trecho:";
    }

    setTimeout(() => {
      this.searchbar.setFocus();
    },150);

  }

  //realizar busca passando o tipo
  getItems(value:any){
    if(value && value.trim() != ''){
      if(this.type == "number"){
        this.songs = this.songsDao.searchByNumber(value);
      }else{
        this.songs = this.songsDao.searchByString(value);
      }
    }else{
      this.songs = this.songsDao.getSongs();
    }
  }

  //inicializar um vetor com um valor recebido
  inicialize(vector, size, value){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }
  
  //mudar para a pagina de seleção
  pushPageSelect(){
    this.navCtrl.push(SelectPage, {});
    this.search(null);
    return false;
  }

  //mudar para a pagina de musica  
  pushPageMusic(index:number){
    // this.presentProfileModal(index);

    this.navCtrl.push(RightNavPage, {index: index});
    this.searchbar.value = "";
    this.search(null);
    return false;
  }

  //mudar para a pagina de musica por modal  
  presentProfileModal(index:number) {
    let profileModal = this.modalCtrl.create(RightNavPage, {index: index, modal:true});
    profileModal.present();
  }

  //favoritar uma musica
  favorit(index:number){
    this.songsDao.favorit(index, true);
  }

}
