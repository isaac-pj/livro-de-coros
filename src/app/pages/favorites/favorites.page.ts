import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
import { Songs } from 'src/app/models/songs.model';
import { PopoverPage } from '../shared/popover/popover';
import { ModalMusicPage } from '../modal-music/modal-music.page';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { noBubble } from 'src/app/utils/utils';
import { BOOKS, BOOKS_LONG } from 'src/app/enums/books.enum';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {
  favorites: Songs[] = [];
  book: string = BOOKS.ALL;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public songsDaoProvider: SongsDaoProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public dataSetService: DataSetService,
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.start();
  }

  async start() {
    this.list();
  }

  async list(book?: string) {
    if (book) {
      this.filter(book);
      return;
    }
    const favorits = await this.songsDaoProvider.getFavorits();
    this.favorites = favorits.map(ID => this.songsDaoProvider.getSong(ID)).reverse();
  }

  async filter(book: string) {
    const songs = await this.songsDaoProvider.getSongs(book);
    this.favorites = songs.filter(song => song.favorit);
  }

  remove(ID: number, event?: Event) {
    noBubble(event);
    this.songsDaoProvider.favorit(ID);
    this.start();
  }

  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
  }

  async presentProfileModal(index: number) {
    const profileModal = await this.modalCtrl.create({
      component: ModalMusicPage,
      componentProps: { index }
    });
    profileModal.present();
  }

  clearAll() {
    this.favorites.forEach(song => this.remove(song.ID));
  }

  async more(ev, options: string[]) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: ev,
      translucent: true,
      componentProps: {data: options}
    });
    popover.onDidDismiss().then((value) => this.popoverResponse(value.data.index));
    popover.present();
  }

  popoverResponse(value: number) {
    if (value !== 0 && !value) { return false; }
    switch (value) {
      case 0:
        this.showAlertFilter();
        break;
      case 1:
        this.showConfirm('Deseja mesmo remover?',
        'todas os itens existentes serão removidos da lista de favoritos');
        break;
      default:
        // alert("opção: "+value);
        break;
    }
  }

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
            this.showToast('Todos os favoritos foram apagadas!', 3000, 'bottom');
          }
        }
      ]
    });
    confirm.present();
  }

  async showToast(msg, time, position) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position
    });

    toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
      // document.location.href = 'index.html';
    });

    toast.present();
  }

  async showAlertFilter() {
    const alert = await this.alertCtrl.create({
      header: 'Filtrar',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: BOOKS_LONG.ALL,
          value: BOOKS.ALL,
          checked: this.book === BOOKS.ALL
        },
        {
          name: 'radio2',
          type: 'radio',
          label: BOOKS_LONG.LDC,
          value: BOOKS.LDC,
          checked: this.book === BOOKS.LDC
        },
        {
          name: 'radio3',
          type: 'radio',
          label: BOOKS_LONG.CC,
          value: BOOKS.CC,
          checked: this.book === BOOKS.CC
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aplicar',
          handler: option => {
            console.log('Confirm Ok');
            this.book = option;
            this.list(this.book);
          }
        }
      ]
    });

    await alert.present();
  }

}
