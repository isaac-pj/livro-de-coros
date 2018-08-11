import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  expanded:boolean = false;
  orientation:string = "";

  constructor(
    public platform: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {

      platform.ready().then((readySource) => {
        this.orientation = platform.width() > platform.height() ? 'horizontal' : 'vertical';
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

  load(url){
    window.open(url, '_blank')
  }

  expand(){
    this.expanded = this.expanded ? false : true;
  }

}
