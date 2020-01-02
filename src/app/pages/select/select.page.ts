import { RandomPage } from '../random/random.page';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { ListsPage } from '../lists/lists.page';
import { List } from '../../models/list.model';

import { SongsService } from '../../services/songs.service';
import { Songs } from '../../models/songs.model';
import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController, ToastController } from '@ionic/angular';
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
  selecting = false;
  type = 'text';
  placeHolder = 'Search';
  songs: Songs[] = [];
  list: Songs[] = [];
  checked: boolean[] = [];

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public songsService: SongsService,
    public songsDao: SongsDaoProvider,
    public listsDaoProvider: ListsDaoProvider,
    private datePipe: DatePipe,
    public router: Router,
    public dataSetService: DataSetService,
  ) {

    this.checked = inicialize(this.checked, this.songs.length, false);
  }

  // #INICIALIZAÇÂO
  ngOnInit() {
    this.songsDao.getSongs().then((songs) => {
      this.songs = songs;
    });
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
        this.list = props.data.list;
        this.updateCheckeds(this.list);
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
      this.list);
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
    this.search(null);
    if (this.searchbar) { this.searchbar.value = ''; }
    this.navCtrl.pop();
    return false;
  }


  // #AÇÕES

  // apenas decide qual tipo de busca irá ser feito
  search(type: number) {
    if (type == null) {
      this.searching = false;
      // this.songs = this.songsDao.getSongs();
    } else {
      this.searching = true;
    }

    if (type == 1) {
      this.type = 'number';
      this.placeHolder = 'Digite o numero:';
    } else if (type == 2) {
      this.type = 'text';
      this.placeHolder = 'Digite o nome ou um trecho:';
    }

    if (this.searching == true) {
      setTimeout(() => {
        this.searchbar.setFocus();
      }, 150);
    }

  }

  // buscar itens no banco
  getItems(value: any) {
    if (value && value.trim() != '') {
      if (this.type == 'number') {
        this.songs = this.songsDao.searchByNumber(value);
      } else {
        this.songs = this.songsDao.searchByString(value);
      }
    } else {
      // this.songs = this.songsDao.getSongs();
    }
  }

  // adiciona uma música na lista
  check(song: Songs, event?) {
    event.preventDefault();
    event.stopPropagation();
    const index = this.list.indexOf(song);
    index === -1 ? this.add(song) : this.remove(index);
  }

  add(song) {
    this.list.push(song);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  // #SUPORTE

  isEmpty() {
    return this.list.length > 0 ? false : true;
  }

}
