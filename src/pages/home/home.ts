import { SongsService } from './../../services/songs.service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RightNavPage } from './../right-nav/right-nav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private songsService: SongsService) {
    songsService.changeSongs();
  }


  pushPage(index:number){
    this.navCtrl.push(RightNavPage, {index: index});
  }
}
