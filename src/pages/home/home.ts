import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RightNavPage } from './../right-nav/right-nav';
import { SongsService } from './../../services/songs.service';
import { Songs } from './../../models/songs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  @ViewChild('searchbar') searchbar;

  searching:boolean = false;
  type:string = "text";
  placeHolder:string = "Search"
  songs:Songs[] = this.songsService.getSongs();

  constructor(public navCtrl: NavController, public songsService: SongsService) {
    
  }

  search(type:number){
    if(type == null){
      this.searching = false;
      this.songs = this.songsService.getSongs();
    }else{
      this.searching = true;
    }

    if(type == 1){
      this.type = "number";
      this.placeHolder = "Digite o numero:";
    }else if(type == 2){
      this.type = "text";
      this.placeHolder = "Digite o nome ou um trecho:";
    }

    setTimeout(() => {
      this.searchbar.setFocus();
    },150);

  }

  getItems(value:any){
    if(value && value.trim() != ''){
      if(this.type == "number"){
        this.songs = this.songsService.searchByNumber(value);
      }else{
        this.songs = this.songsService.searchByString(value);
      }
    }else{
      this.songs = this.songsService.getSongs();
    }
  }

  pushPage(index:number){
    this.navCtrl.push(RightNavPage, {index: index});
    this.search(null);
  }
}
