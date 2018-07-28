import { SelectPage } from './../select/select';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RightNavPage } from './../right-nav/right-nav';
import { SongsService } from './../../services/songs.service';
import { Songs } from './../../models/songs.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('searchbar') searchbar;

  searching:boolean = false;
  // checked:boolean[] = [];
  type:string = "text";
  placeHolder:string = "Search";
  songs:Songs[] = this.songsService.getSongs();
  list:Songs[] = [];

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public songsService: SongsService) {
    // this.listsDaoProvider.reset();
    // this.checked = this.inicialize(this.checked, this.songs.length, false);
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

  inicialize(vector, size, value){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }
  
  pushPageSelect(){
    this.navCtrl.push(SelectPage, {});
    this.search(null);
    return false;
  }

  pushPageMusic(index:number){
    this.navCtrl.push(RightNavPage, {index: index});
    this.searchbar.value = "";
    this.search(null);
    return false;
  }
}
