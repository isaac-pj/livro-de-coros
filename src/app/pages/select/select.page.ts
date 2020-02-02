import { RandomPage } from '../random/random.page';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { List } from '../../models/list.model';

import { SongsService } from '../../services/songs.service';
import { Songs } from '../../models/songs.model';
import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { inicialize } from 'src/app/utils/utils';
import { ModalMusicPage } from '../modal-music/modal-music.page';
import { Router } from '@angular/router';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';

@Component({
  selector: 'page-select',
  templateUrl: 'select.page.html',
  styleUrls: ['select.page.scss'],
  providers: [DatePipe]
})
export class SelectPage implements OnInit {
  @ViewChild('searchbar') searchbar;

  searching = false;
  type = 'search';
  songs: Songs[] = [];
  songsList: Songs[] = [];
  checked: boolean[] = [];

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public songsService: SongsService,
    public listsDaoProvider: ListsDaoProvider,
    public songsDaoProvider: SongsDaoProvider,
    public dataSetService: DataSetService,
    private datePipe: DatePipe,
    public router: Router,
  ) {

    this.checked = inicialize(this.checked, this.songs.length, false);
  }

  // #INICIALIZAÇÂO

  ngOnInit() {
    this.list();
  }

  // #NAVEGAÇÂO

  // mudar para a pagina de gerar lista
  async pushPageGenerate() {
    const generateList = await this.modalCtrl.create({
      component: RandomPage,
      componentProps: { songs: this.songs },
    });

    generateList.present();
    generateList.onDidDismiss().then((props) => {
      if (props.data.list) {
        this.songsList = props.data.list;
        this.updateCheckeds(this.songsList);
        this.goToList();
        this.router.navigateByUrl('/list/temp');
      }
    });
    return false;
  }

  // mudar para a pagina de musica
  pushPageMusic(index: number) {
    this.presentMusicModal(index);
    return false;
  }

  // cria uma nova lista e seta os dados dessa lista para o dataSetService
  goToList() {
    const list = new List(null,
      this.datePipe.transform(new Date(), 'longDate'),
      this.datePipe.transform(new Date(), 'HH:mm'),
      this.songsList);
    this.dataSetService.setData('temp', {index: null, list});
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

  cancel(event: any) {
    this.searchClose();
    this.navCtrl.pop();
    return false;
  }

  // #AÇÕES

  // recuperar lista de musicas
  public async list() {
    this.songs = await this.songsDaoProvider.getSongs();
  }

  // ativar o modo de busca
  public search(type) {
    this.type = type;
    this.searching = true;
  }

  // tratar resultado da busca
  onSearch(event) {
    const { result } = event;
    result ? this.songs = result : this.searchClose();
  }

  // encerrar todas as atividades de busca
  private searchClose() {
    this.list();
    this.searching = false;
  }

  // adiciona uma música na lista
  check(song: Songs, event?) {
    event.preventDefault();
    event.stopPropagation();
    const index = this.songsList.indexOf(song);
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
