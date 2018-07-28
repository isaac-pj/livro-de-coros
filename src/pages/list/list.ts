import { RightNavPage } from './../right-nav/right-nav';
import { Songs } from './../../models/songs.model';
import { Lists } from './../../models/lists.model';
import { Component } from '@angular/core';
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

  list:Lists;
  songs:Songs[] = [];
  checked:Songs[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = navParams.get("lista");
    this.songs = this.list.songs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  pushPageMusic(index:number){
    this.navCtrl.push(RightNavPage, {index: index});
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

// ES6
// array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );



}

