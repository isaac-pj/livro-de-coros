import { SlidesPage } from './../slides/slides';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CifrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cifras',
  templateUrl: 'cifras.html',
})
export class CifrasPage {

  content:string = "cifras";

  inicio:any;
  cifras:any;
  slides:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicio = HomePage;
    this.cifras = CifrasPage;
    this.slides = SlidesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CifrasPage');
  }

}
