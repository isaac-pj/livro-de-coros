import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from './../../services/songs.service';
import { Songs } from './../../models/songs.model';

/**
 * Generated class for the RightNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-right-nav',
  templateUrl: 'right-nav.html',
})
export class RightNavPage {

  index:number;
  @Input("song") song:Songs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private songsService: SongsService) {
    this.index = navParams.get("index");
    this.song = songsService.getSong(this.index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightNavPage');
  }

  next(){
    this.index++;
    this.song = this.songsService.getSong(this.index);
  }

  prev(){
    this.index--;
     this.song = this.songsService.getSong(this.index);
  }

}
