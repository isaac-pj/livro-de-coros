import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { RightNavPage } from './../right-nav/right-nav';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  songs:Songs[] = [];

  constructor(public songsDao: SongsDaoProvider, public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  start(){
    this.songs = this.songsDao.getSongs().filter((song)=>{return song.favorit});
    return this.songs;
  }

  //remover item dos favoritos
  remove(index:number){
    this.songs.splice(index, 1);
    this.songsDao.favorit(index, true);
  }

  //mudar para a pagina de musica  
  pushPageMusic(index:number){
    // this.presentProfileModal(index);

    this.navCtrl.push(RightNavPage, {index: index});
    return true;
  }

  //mudar para a pagina de musica por modal  
  presentProfileModal(index:number) {
    let profileModal = this.modalCtrl.create(RightNavPage, {index: index});
    profileModal.present();
  }

}
