import { PopoverPage } from '../shared/popover/popover';
import { SongsService } from '../../services/songs.service';
import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { List } from '../../models/list.model';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { inicialize } from 'src/app/utils/utils';

import {
  NavController,
  PopoverController,
  ToastController,
  AlertController
} from '@ionic/angular';


/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.page.html',
  styleUrls: ['lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists: List[] = [];
  expanded: boolean[] = [];

  constructor(
    public toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    public songsService: SongsService,
    public navCtrl: NavController,
    public listsDaoProvider: ListsDaoProvider,
    public alertCtrl: AlertController,
    private dataSetService: DataSetService,
  ) {}

  // #LIFECYCLE
  ngOnInit(): void {
    this.list();
  }

  async list() {
    this.lists = await this.listsDaoProvider.getLists();
    this.expanded = inicialize(this.expanded, this.lists.length, false);
  }

  // #NAVIGATION
  goToList(index: number) {
    this.dataSetService.setData(index, {index, list: this.lists[index]});
  }

  // #ACTIONS
  deleteList(event: Event, index: number) {
    event.stopPropagation();
    event.preventDefault();
    this.listsDaoProvider.removeList(index);
    this.expanded.splice(index, 1);
    this.updateList();
    return false;
  }

  updateList() {
    this.lists = this.listsDaoProvider.lists;
  }

  clearAll() {
    this.listsDaoProvider.clearLists();
  }

  expandItem(event: Event, index: number) {
    event.stopPropagation();
    event.preventDefault();
    this.expanded[index] = this.expanded[index] ? false : true;
  }


  // #INTERFACE

  // three dont menu popup options
  async more(ev, options: string[]) {

    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: ev,
      translucent: true,
      componentProps: {data: options}
    });

    popover.onDidDismiss().then(
      (value) => value.data ? this.popoverResponse(value.data.index) : null
    );

    return await popover.present();
  }

  // handler popover response
  popoverResponse(value: number) {
    if (value != 0 && !value) { return false; }
    switch (value) {
      case 0:
        this.showConfirm('Deseja mesmo apagar?', 'todas as listas serão apagadas e não poderão mais ser recuperadas');
        break;
      case 1:
        // alert("opção: "+value);
        break;
      default:
        // alert("opção: "+value);
        break;
    }
  }

  // show confirm alert
  async showConfirm(title: string, msg: string) {
    const confirm = await this.alertCtrl.create({
      header: title,
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
            this.showToast('Todos as listas foram apagadas!', 3000, 'bottom');
            setTimeout(() => {
              window.location.reload();
              // document.location.href = 'index.html';
            }, 3000);
          }
        }
      ]
    });
    await confirm.present();
  }

  // show toast default
  async showToast(msg, time, position) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position,
    });

    await toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    await toast.present();
  }
}
