import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { RightNavPage } from './../right-nav/right-nav';
import { Songs } from './../../models/songs.model';
import { Lists } from './../../models/lists.model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  @ViewChild('input') input: ElementRef;
  index:number;
  list:Lists;
  songs:Songs[] = [];
  checked:Songs[] = [];
  expanded:boolean = false;
  editing:boolean;
  comments:string;
  desmarcado:boolean = false;
  marcado:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listsDaoProvider: ListsDaoProvider) {
    this.start();
     
    this.editing = this.list.comments ? false : true;
    console.log(this.input);
  }

  save(msg:string){
    if(msg){
      this.list.comments = msg;
      this.listsDaoProvider.update(this.index, this.list);
      this.comments = this.list.comments;
      this.editing = false;   
    }
  }

  edit(){
    this.editing = true;
  }

  cancel(value){
    this.editing = this.list.comments ? false : true;
    this.expanded = false;
  }

  clear(){
    if(!this.list.comments) return false;
      this.listsDaoProvider.update(this.index, this.list);
      this.list.comments = "";
      this.comments = this.list.comments;
      this.editing = true;
  }

  expandItem(){
    this.expanded = this.expanded ? false : true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  pushPageMusic(index:number){
    this.navCtrl.push(RightNavPage, {index: index, lista:this.list.songs});
  }

  check(song:Songs){
    this.checked.unshift(song);
    this.updateList();
  }

  uncheck(index){
    this.checked.splice(index, 1);
    this.updateList();
  }

  updateList(){
    
    this.songs = this.list.songs.filter(( elem, index, songs ) => {
      // return array.indexOf( elem ) === index;
      return (this.checked.indexOf(elem) == -1);
    });

  }

  start(){
    this.list = this.navParams.get("lista");
    this.songs = this.list.songs;
    this.index = this.navParams.get("index");
    this.comments = this.list.comments;
  }

// ES6
// array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );

}

