import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public toastCtrl:ToastController, public alertCtrl: AlertController, public songsDao: SongsDaoProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  reset(){
    this.showConfirm("Deseja apagar tudo?", "Todos os dados serão apagados incluindo as listas criadas e os favoritos");
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
            this.songsDao.reset();
            this.showToast("Todos os dados foram apagados!", 3000, "bottom");
            setTimeout(() => {
              window.location.reload();
              // document.location.href = 'index.html';
            },3000);
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
