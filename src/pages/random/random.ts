import { Songs } from './../../models/songs.model';
import { ViewController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {
  songs:Songs[] = [];
  range:Songs[] = [];
  musicas:number = 8;
  categories:string[] = ["Oração", "Adoração", "Natal", "Pascoa", "Cristo", "Deus"];

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.songs = this.navParams.get("songs");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }

  close(){
    this.viewCtrl.dismiss({});
  }

  createList(){
    this.range.length > 4 ? this.viewCtrl.dismiss({list:this.range}) : this.showToast("A lista precisa de no mínimo 5 músicas", 3000, "bottom");
  }

  update(index:number){
    this.range[index] = this.songs[this.getRandomInt(0, this.songs.length-1)];
  }

  remove(index:number){
    this.range.length > 5 ? this.range.splice(index, 1) : this.showToast("A lista precisa de no mínimo 5 músicas", 3000, "bottom");
  }

  showAlert(title, msg){
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: ['Ok']
    });
    alert.present();
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

  generateList(size){
    this.range = [];

    for(let i = 0; i < size; i++){
      let index = this.getRandomInt(0, this.songs.length-1);
      this.range.push(this.songs[index]);
      // alert(this.getRandomInt(0, this.songs.length-1));
    }
    
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
