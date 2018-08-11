import { PopoverPage } from './../popover/popover';
import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { RightNavPage } from './../right-nav/right-nav';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, PopoverController } from 'ionic-angular';

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

  constructor( 
    public toastCtrl: ToastController,  
    public alertCtrl: AlertController, 
    public songsDao: SongsDaoProvider, 
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
  ) {
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
    // this.songs.splice(index, 1);
    this.songsDao.favorit(index, true);
    this.start();
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

  clearAll(){
    for(let i in this.songs){
      this.remove(this.songs[0].ID);
    }
  }

  more(event, options:string[]) {
    const popover = this.popoverCtrl.create(PopoverPage, {data:options});
    popover.present({ev:event});
    popover.onDidDismiss((data) => this.popoverResponse(data ? data.idx : null));
  }

  popoverResponse(value:number){
    if(value != 0 && !value) return false;
    switch(value){
      case 0:
        this.showConfirm("Deseja mesmo remover?", "todas os itens existentes serão removidos da lista de favoritos");
      break;
      case 1:
        // alert("opção: "+value);
      break;
      default:
        // alert("opção: "+value);
      break;
    }
  }

  showConfirm(title:string, msg:string) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'Não',
          handler: (negative) => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: (positive) => {
            console.log('Agree clicked');
            this.clearAll();
            this.showToast("Todos os favoritos foram apagadas!", 3000, "bottom");
            // setTimeout(() => {
            //   window.location.reload();
            //   // document.location.href = 'index.html';
            // },3000);
          }
        }
      ]
    });
    confirm.present();
  }

  showToast(msg, time, position){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
