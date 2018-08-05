import { ViewController } from 'ionic-angular';
import { PopoverComponent } from './../../components/popover/popover';
import { FavoritesPage } from './../favorites/favorites';
import { SlidesPage } from './../slides/slides';
import { Lists } from './../../models/lists.model';
import { ListPage } from './../list/list';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, IonicApp } from 'ionic-angular';
import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { PopoverController } from 'ionic-angular';

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

  list:Songs[] = [];
  index:number;
  inListIndex:number;
  song:Songs;
  modal:boolean = false;

  constructor(public viewCtrl: ViewController, public popoverCtrl: PopoverController, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private songsDao: SongsDaoProvider) {
    this.index = navParams.get("index");
    this.list = navParams.get("lista");
    this.modal = navParams.get("modal");

    if(!this.list){
      this.song = this.songsDao.getSong(this.index);
    }else{
      this.song = this.findSongInList(this.index);
    }   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightNavPage');
  }

  close(event){
    this.viewCtrl.dismiss();
  }

  more(event) {
    const popover = this.popoverCtrl.create(PopoverComponent, {
      data:['slides', 'cifras', 'fonte', 'cor', 'outros']
    });
    popover.present({ev:event});
    popover.onDidDismiss(data => console.log(data));
  }

  canNext(){
    if(this.list){
      return this.inListIndex < this.list.length-1 ? true:false;
    }else if(this.index < this.songsDao.getSongs().length-1){
      return true;
    }
    return false;
  }

  next(){
    if(this.canNext()){
      this.index++;
      this.inListIndex++;
      this.getSong();
    }else{
      this.index--;
      this.inListIndex--;
    }
  }

  canPrev(){
    if(this.list){
      return this.inListIndex > 0 ? true:false;
    }else if(this.index > 0){
      return true;      
    }  
    return false;
  }

  prev(){
    if(this.canPrev()){
      this.index--;
      this.inListIndex--;      
      this.getSong();
    }else{
      this.index++;
      this.inListIndex++;            
    }
  }

  checker(){
    this.navCtrl.pop();
  }

  getSong(){
    if(!this.list){
      this.getSongInSongs(this.index);
    }else{
      this.getSongInList(this.inListIndex);
    }    
  }

  findSongInList(index:number){
    for(let i in this.list){
      if(this.list[i].ID == this.index){
        this.inListIndex = Number.parseInt(i);
        return this.list[i]; 
      } 
    }
  }

  getSongInList(index:number){
    this.song = this.list[index];
  }

  getSongInSongs(index:number){
    this.song = this.songsDao.getSong(index);
  }

  showInfo(){
    let alert = this.alertCtrl.create({
      title: 'Notas',
      message: this.song.notes ? this.song.notes: 'Ainda não há notas sobre está música',
      buttons: ['Ok']
    });
    alert.present();

  //  let alert = this.alertCtrl.create({
  //     title: 'Comentários',
  //     message: this.song.comments ? this.song.comments: 'Ainda não há comentários para está música',
  //     inputs: [
  //       {
  //         name: 'comments',
  //         placeholder: 'toque para inserir um comentário'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Salvar',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  }
  
}
