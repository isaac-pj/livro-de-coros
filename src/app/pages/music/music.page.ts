import { PopoverController, NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { ActivatedRoute } from '@angular/router';
import { PopoverPage } from '../shared/popover/popover';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { PreferencesProvider, CONFIGS } from 'src/app/providers/preferences/preferences';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})

export class MusicPage implements OnInit {

  props: any = undefined;
  list: Songs[] = [];
  song: Songs;
  index: number;
  hasFocus: any = null;
  fontSize = this.preferencesProvider.getPreference(CONFIGS.MUSIC.FONT_SIZE);

  constructor(
    private songsDao: SongsDaoProvider,
    private route: ActivatedRoute,
    private dataSetService: DataSetService,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController,
    private preferencesProvider: PreferencesProvider,
  ) { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.getParams();
    this.song = this.list.length ? this.updateSong() : this.songsDao.getSong(this.index);
  }

  async getParams() {
    if (this.route.snapshot.data['data']) {
      this.props = this.route.snapshot.data['data'];
    }

    this.index = this.props.index;
    this.list = this.props.list ? this.props.list : await this.songsDao.getSongs();
  }

  // #ACTIONS

  hasNext() {
    return this.index < this.list.length - 1 ? true : false;
  }

  hasPrev() {
    return this.index > 0 ? true : false;
  }

  next() {
    if (this.hasNext()) {
        this.index++;
        this.updateSong();
    }
  }

  prev() {
    if (this.hasPrev()) {
      this.index--;
      this.updateSong();
    }
  }

  updateSong() {
    this.hasFocus = null;
    return this.song = this.list[this.index];
  }

  finish() {
    this.navCtrl.pop();
  }

  // #NAVIGATION

  goToSlidePage() {
    const ID = this.list.findIndex(song => song.ID === this.index);
    this.dataSetService.setData(this.index, {index: ID !== -1 ? ID : this.index, list: this.list});
    this.navCtrl.navigateForward('/slide/' + this.index);
  }

  // #INTERFACE

  getFontSize() {
    return `${this.fontSize}px`;
  }

  smallText() {
    this.fontSize = this.fontSize > 10 ? this.fontSize -= 2 : this.fontSize;
    this.preferencesProvider.setPreference(CONFIGS.MUSIC.FONT_SIZE, this.fontSize);
  }

  bigText() {
    this.fontSize = this.fontSize < 56 ? this.fontSize += 2 : this.fontSize;
    this.preferencesProvider.setPreference(CONFIGS.MUSIC.FONT_SIZE, this.fontSize);
  }

  getFocus(index: number) {
    this.hasFocus = this.hasFocus === index ? null : index;
  }

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

  popoverResponse(value: number) {
    if (value !== 0 && !value) { return false; }
    switch (value) {
      case 0:
        this.goToSlidePage();
        break;
      case 1:
        alert('opção: ' + value);
        break;
      default:
        alert('opção: ' + value);
        break;
    }
  }

  async showInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Notas',
      message: this.song.notes ? this.song.notes : 'Ainda não há notas sobre está música',
      buttons: ['Ok']
    });
    await alert.present();
  }
}
