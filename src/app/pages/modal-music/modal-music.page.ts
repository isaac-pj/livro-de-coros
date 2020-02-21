import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
import { Songs } from 'src/app/models/songs.model';

@Component({
  selector: 'app-modal-music',
  templateUrl: './modal-music.page.html',
  styleUrls: ['./modal-music.page.scss'],
})
export class ModalMusicPage implements OnInit {

  index: number;
  song: Songs;
  fontSize = 16;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public songsDao: SongsDaoProvider,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit(): void {
    this.getSong();
  }

  getSong() {
    this.index = this.navParams.get('index');
    this.song = this.songsDao.getSong(this.index);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getLetra() {
    let lyrics = '';
    // tslint:disable-next-line: forin
    for (const i in this.song.letra) {
      lyrics = lyrics.concat(this.song.letra[i]);
    }
    return lyrics;
  }

  getFontSize() {
    return `${this.fontSize}px`;
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
