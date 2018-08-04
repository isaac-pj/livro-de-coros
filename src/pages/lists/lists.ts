import { SongsService } from './../../services/songs.service';
import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { ListPage } from './../list/list';
import { Lists } from './../../models/lists.model';
import { SelectPage } from './../select/select';
import { Component, ViewChild, ElementRef } from '@angular/core';
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
  expanded:boolean[] = [];

  constructor(public songsService:SongsService, public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private listsDaoProvider: ListsDaoProvider) {
    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  expandItem(index:number){   
      this.expanded[index] = this.expanded[index] ? false : true;
  }

  pushPageLists(index:number){
    this.navCtrl.push(ListPage, {lista: this.lists[index], index:index});
  }

  newList(){
    this.navCtrl.push(SelectPage, {});
  }

  deleteList(index:number){
    this.listsDaoProvider.remove(index);
    this.expanded.splice(index, 1);
    this.updateList();
    return false;
  }

  inicialize(vector, size, value){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }

  start(){
    this.storage.get("Lists").then((value) => {
      if(value){
        this.lists = value;
      }else{
        this.storage.set("Lists", this.lists);
      }
      this.expanded = this.inicialize(this.expanded, this.lists.length, false);
    });
  }

  updateList(){
    this.lists = this.listsDaoProvider.lists;
  }
}
