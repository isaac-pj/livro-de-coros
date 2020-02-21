import { RandomPage } from '../modal-random/random.page';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { List } from '../../models/list.model';

import { Songs } from '../../models/songs.model';
import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, NavParams } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { inicialize, noBubble } from 'src/app/utils/utils';
import { ModalMusicPage } from '../modal-music/modal-music.page';
import { Router } from '@angular/router';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { Search } from 'src/app/interfaces/search/search';

@Component({
  selector: 'page-select',
  templateUrl: 'modal-select.page.html',
  styleUrls: ['modal-select.page.scss'],
  providers: [DatePipe]
})
export class ModalSelectPage implements OnInit, Search {
  @ViewChild('searchbar') searchbar;

  searching = false;
  type = 'search';
  songs: Songs[] = [];
  songsList: Songs[] = [];
  checked: boolean[] = [];
  listName: string;

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public listsDaoProvider: ListsDaoProvider,
    public songsDaoProvider: SongsDaoProvider,
    public dataSetService: DataSetService,
    private datePipe: DatePipe,
    public router: Router,
    private navParams: NavParams,
  ) {
      this.checked = inicialize(this.checked, this.songs.length, false);
    }

  // #INICIALIZAÇÂO

  ngOnInit() {
    this.listName = this.navParams.get('name');
    this.songsList = this.navParams.get('songs');
    const filter = this.navParams.get('filter');
    this.list(filter);
    this.updateCheckeds(this.songsList);
  }

  // #NAVEGAÇÂO

  // mudar para a pagina de musica
  pushPageMusic(index: number) {
    this.presentMusicModal(index);
    return false;
  }

  // cria uma nova lista e seta os dados dessa lista para o dataSetService
  addToList() {
    this.modalCtrl.dismiss({songs: this.songsList});
  }


  // #INTERFACE

  // recebe uma lista de músiacs e exibe os checkbox delas como checked
  updateCheckeds(songsList: Songs[]) {
    songsList.forEach(song => this.checked[song.ID] = true);
  }

  // mudar para a pagina de musica por modal
  async presentMusicModal(index: number) {
    const musicModal = await this.modalCtrl.create({
      component: ModalMusicPage,
      componentProps: { index }
    });
    musicModal.present();
  }

  async showToast(msg, time, position) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position
    });

    toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    await toast.present();
  }

  cancel(event?: any) {
    this.modalCtrl.dismiss(false);
  }

  getSubtitle(letra: any) {
    return letra.estrofes[0]
    .reduce((line, next) => line.concat(` ${next}`));
  }

  // #AÇÕES

  private applyFilters(filter: string) {
    switch (filter) {
      case 'favorites':
        return this.songs.filter(song => song.favorit);
      default:
        return this.songs;
    }
  }

  // recuperar lista de musicas
  public async list(filter?: string) {
    this.songs = await this.songsDaoProvider.getSongs();
    this.songs = this.applyFilters(filter);
  }

  // ativar o modo de busca
  public search(type) {
    this.type = type;
    this.searching = true;
  }

  // tratar resultado da busca
  public onSearch(event) {
    const { result } = event;
    result ? this.songs = result : this.searchClose();
  }

  // encerrar todas as atividades de busca
  public searchClose() {
    this.list();
    this.searching = false;
  }

  // adiciona uma música na lista
  check(song: Songs, event?) {
    noBubble(event);
    const index = this.songsList.findIndex(elem => elem.ID === song.ID );
    index === -1 ? this.add(song) : this.remove(index);
  }

  add(song) {
    this.songsList.push(song);
  }

  remove(index: number) {
    this.songsList.splice(index, 1);
  }

  // #SUPORTE

  isEmpty() {
    return this.songsList.length > 0 ? false : true;
  }

}
