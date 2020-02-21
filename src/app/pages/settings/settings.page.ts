import { Component, OnInit } from '@angular/core';
import { DataStorageProvider } from './../../providers/data-storage/data-storage';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataStorageProvider: DataStorageProvider,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  reset() {
    this.showConfirm('Deseja apagar tudo?',
    'Todos os dados serão apagados incluindo as listas criadas e os favoritos');
  }


  // apaga todo o banco de dados
  private clear() {
    this.dataStorageProvider.clear();
  }

  async showConfirm(title: string, msg: string) {
    const confirm = await this.alertCtrl.create({
      header: title,
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
            this.dataStorageProvider.clear();
            this.showToast('Todos os dados foram apagados!', 3000, 'bottom');
            setTimeout(() => {

              document.location.href = 'index.html';
              // window.location.reload(true);
              // window.location.href = 'index.html';
              // navigator.app.loadUrl("file:///android_asset/www/index.html");
              // window.location.href = 'index.html'
            }, 1000);
          }
        }
      ]
    });
    confirm.present();
  }

  async showToast(msg, time, position) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position
    });

    toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
