import { SongsService } from './../../services/songs.service';
import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { ListPage } from './../list/list';
import { Lists } from './../../models/lists.model';
import { SelectPage } from './../select/select';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  lists:Lists[] = [];

  constructor(public songsService:SongsService, public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private listsDaoProvider: ListsDaoProvider) {
    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  pushPageLists(index:number){
    this.navCtrl.push(ListPage, {lista: this.lists[index]});
  }

  newList(){
    this.navCtrl.push(SelectPage, {});
  }

  deleteList(index:number){
    this.listsDaoProvider.remove(index);
    this.updateList();
    return false;
  }

  start(){
    this.storage.get("Lists").then((value) => {
      if(value){
        this.lists = value.reverse();
      }else{
        this.storage.set("Lists", this.lists);
      }
    });
  }

  updateList(){
    this.lists = this.listsDaoProvider.lists;
  }
}
