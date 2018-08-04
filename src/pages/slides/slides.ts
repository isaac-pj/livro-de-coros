import { CifrasPage } from './../cifras/cifras';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  
  content:string = "slides";

  inicio:any;
  cifras:any;
  slides:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicio = HomePage;
    this.cifras = CifrasPage;
    this.slides = SlidesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
