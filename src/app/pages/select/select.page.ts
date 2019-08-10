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

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  // songs:Songs[] = this.songsDao.getSongs();
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

  // mudar para a pagina de gerae lista
  async pushPageGenerate() {
    const generateList = await this.modalCtrl.create({
      component: RandomPage,
      componentProps: { songs: this.songs },
    });

    generateList.present();
    generateList.onDidDismiss().then((props) => {
      console.log(props.data);
      if (props.data.list) {
        this.list = props.data.list;
        this.createList();
      }
    });
    return false;
  }

  // mudar para a pagina de musica
  pushPageMusic(index: number) {
    // this.navCtrl.push(MusicPage, {index: index});
    this.presentMusicModal(index);
    return false;
  }


  // #INTERFACE

  // mudar para a pagina de musica por modal
  async presentMusicModal(index: number) {
    const musicModal = await this.modalCtrl.create({
      component: ModalMusicPage,
      componentProps: { index }
    });
    musicModal.present();
  }

  // axibe o modal para o usuario entra com as informações
  showCreateListAlert(nagativeAction, positiveAction) {
    return this.alertCtrl.create({
      header: 'Como devo Chamar?',
      inputs: [
        {
          name: 'listname',
          placeholder: 'Nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'negativeAction',
          handler: data => {
            nagativeAction();
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            positiveAction(data.listname);
          }
        }
      ]
    });
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
  check(event, song: Songs) {
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

  // cria uma nova lista e exibe o alert
  async createList() {

    if (!this.isEmpty()) {
      const alert = await this.showCreateListAlert(
        () => null,
        (listname) => {
          if (listname) {
            const list = new List(listname,
              this.datePipe.transform(new Date(), 'longDate'),
              this.datePipe.transform(new Date(), 'HH:mm'),
              this.list);

            this.listsDaoProvider.createList(list);
            this.router.navigateByUrl('/lists');
          }
        });

      this.list.length < 2 || this.list.length > 20 ?
      this.showToast(
        'A lista precisa ter entre 2 e 20 músicas', 3000, 'bottom') :
        await alert.present();
    }
  }

  // #SUPORTE

  isEmpty() {
    return this.list.length > 0 ? false : true;
  }

}
