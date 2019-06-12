import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { Storage } from '@ionic/storage';
import { SelectPage } from './../select/select';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController} from 'ionic-angular';
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

  constructor(
    public songsService: SongsService,
    public songsDao: SongsDaoProvider, 
    public listsDaoProvider: ListsDaoProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public loadingCtlr: LoadingController
  ) {
    // this.listsDaoProvider.reset();
    // this.songsService.changeSongs();
  }

  // #LIFECYCLE
  ionViewDidEnter(){
    this.start()
  }

  // #ACTIONS

  start(){
    this.list();
  }

  list(){
    this.songsDao.update().then(()=>{
      this.songs = this.getSongs();
    })
  }

  // retorna lista de songs
  private getSongs(){
    return this.songsDao.getSongs();
  }
  
  //realizar busca passando o tipo
  getItems(value:any){
    this.songs = this.type == "number" ?
    this.songsDao.searchByNumber(value) :
    this.songsDao.searchByString(value);
  }

  searchByNumber(){
    this.type = "number";
    this.placeHolder = "Digite o numero:";
    this.search();
  }

  searchByString(){
    this.type = "text";
    this.placeHolder = "Digite o nome ou um trecho:";
    this.search();
  }

  search(){
    this.searching = true;
    setTimeout(() => {
      this.searchbar.setFocus();
    },150);
  }

  searchClose(){
    this.searching = false;
    this.songs = this.getSongs();
    console.log('cancelei')
  }

   //favoritar uma musica
  favorit(index:number){
    this.songsDao.favorit(index)
    .then(()=> this.getSongs());
  }

  // #NAVIGATION

  //mudar para a pagina de seleção
  pushPageSelect(){
    this.navCtrl.push(SelectPage, {});
    this.searchClose();
    return false;
  }

  //mudar para a pagina de musica  
  pushPageMusic(index:number){
    // this.presentProfileModal(index);

    this.navCtrl.push(RightNavPage, {index: index});
    this.searchbar.value = "";
    this.searchClose();
    return false;
  }

  // #INTERFACE

  //mudar para a pagina de musica por modal  
  presentProfileModal(index:number) {
    let profileModal = this.modalCtrl.create(RightNavPage, {index: index, modal:true});
    profileModal.present();
  }

}
