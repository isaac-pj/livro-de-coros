import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomeTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html'
})
export class HomeTabsPage {

  canticosRoot = 'CanticosPage'
  cifrasRoot = 'CifrasPage'
  slidesRoot = 'SlidesPage'


  constructor(public navCtrl: NavController) {}

}
