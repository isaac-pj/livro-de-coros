import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, NavParams, ModalController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { Songs } from 'src/app/models/songs.model';
import { getRandomInt } from 'src/app/utils/utils';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  songs: Songs[] = [];
  range: Songs[] = [];
  musics = 7;
  categories: string[] = ['Oração', 'Adoração', 'Natal', 'Pascoa', 'Cristo', 'Deus'];

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss({});
  }

  createList() {
    this.range.length > 2 ?
    this.modalCtrl.dismiss({ list: this.range }) :
    this.showToast('A lista precisa ter no mínimo 2 músicas', 3000, 'bottom');
  }

  update(index: number) {
    this.range[index] = this.songs[getRandomInt(0, this.songs.length - 1)];
  }

  add() {
    this.range.length < 20 ?
    this.range.push(this.songs[getRandomInt(0, this.songs.length - 1)]) :
     this.showToast('A lista deve ter no máximo 20 músicas', 3000, 'bottom');
  }

  remove(index: number) {
    this.range.length > 5 ?
    this.range.splice(index, 1) :
    this.showToast('A lista precisa ter no mínimo 2 músicas', 3000, 'bottom');
  }

  async showAlert(title, msg) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['Ok']
    });
    alert.present();
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

  generateList(size) {
    this.range = [];

    for (let i = 0; i < size; i++) {
      const index = getRandomInt(0, this.songs.length - 1);
      this.range.push(this.songs[index]);
      // alert(this.getRandomInt(0, this.songs.length-1));
    }
  }

}
