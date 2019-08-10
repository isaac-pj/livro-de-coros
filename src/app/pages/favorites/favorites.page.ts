import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
import { Songs } from 'src/app/models/songs.model';
import { PopoverPage } from '../shared/popover/popover';
import { ModalMusicPage } from '../modal-music/modal-music.page';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {
  favorites: Songs[] = [];

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public songsDao: SongsDaoProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public dataSetService: DataSetService,
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.start();
  }

  async start() {
    const songs = await this.songsDao.getSongs();
    this.favorites = songs.filter(song => song.favorit);
  }

  // remover item dos favoritos
  remove(index: number, event?: Event) {
    // this.songs.splice(index, 1);
    // this.songs[index].favorit = !this.songs[index].favorit;
    event.preventDefault();
    event.stopPropagation();
    this.songsDao.favorit(index);
    this.start();
  }

  // ### DEPRECATED
  // mudar para a pagina de musica
  // pushPageMusic(index:number){
  //   // this.presentProfileModal(index);

  //   this.navCtrl.push(RightNavPage, {index: index});
  //   return true;
  // }

  // mudar para a pagina de musica
  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
    // this.router.navigate(['/music/', index], {relativeTo: this.route});
  }

  // ### CHANGES
  // mudar para a pagina de musica por modal  
  // presentProfileModal(index:number) {
  //   let profileModal = this.modalCtrl.create(RightNavPage, {index: index});
  //   profileModal.present();
  // }

  async presentProfileModal(index: number) {
    const profileModal = await this.modalCtrl.create({
      component: ModalMusicPage,
      componentProps: { index }
    });
    profileModal.present();
  }

  clearAll() {
    // tslint:disable-next-line: forin
    for (const i in this.favorites) {
      this.remove(this.favorites[0].ID);
    }
  }

  // more(event, options:string[]) {
  //   const popover = this.popoverCtrl.create(PopoverPage, {data:options});
  //   popover.present({ev:event});
  //   popover.onDidDismiss((data) => this.popoverResponse(data ? data.idx : null));
  // }

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
    if (value != 0 && !value) { return false; }
    switch (value) {
      case 0:
        this.showConfirm('Deseja mesmo remover?', 'todas os itens existentes serão removidos da lista de favoritos');
        break;
      case 1:
        // alert("opção: "+value);
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
            // setTimeout(() => {
            //   window.location.reload();
            //   // document.location.href = 'index.html';
            // },3000);
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
    });

    toast.present();
  }

}
