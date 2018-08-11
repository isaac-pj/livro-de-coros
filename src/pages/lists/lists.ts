import { PopoverPage } from './../popover/popover';
import { SongsService } from './../../services/songs.service';
import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { ListPage } from './../list/list';
import { Lists } from './../../models/lists.model';
import { SelectPage } from './../select/select';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController, AlertController } from 'ionic-angular';
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

  constructor(
  public toastCtrl:ToastController, 
  public popoverCtrl: PopoverController, 
  public songsService:SongsService, 
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private storage:Storage, 
  private listsDaoProvider: ListsDaoProvider,
  public alertCtrl:AlertController
  ) {
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

  clearAll(){
    this.listsDaoProvider.clear();
  }

  more(event, options:string[]) {
    const popover = this.popoverCtrl.create(PopoverPage, {data:options});
    popover.present({ev:event});
    popover.onDidDismiss((data) => this.popoverResponse(data ? data.idx : null));
  }

  popoverResponse(value:number){
    if(value != 0 && !value) return false;
    switch(value){
      case 0:
        this.showConfirm("Deseja mesmo apagar?", "todas as listas serão apagadas e não poderão mais ser recuperadas");
      break;
      case 1:
        // alert("opção: "+value);
      break;
      default:
        // alert("opção: "+value);
      break;
    }
  }

  showConfirm(title:string, msg:string) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'Não',
          handler: (negative) => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: (positive) => {
            console.log('Agree clicked');
            this.clearAll();
            this.showToast("Todos as listas foram apagadas!", 3000, "bottom");
            setTimeout(() => {
              window.location.reload();
              // document.location.href = 'index.html';
            },3000);
          }
        }
      ]
    });
    confirm.present();
  }

  showToast(msg, time, position){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
