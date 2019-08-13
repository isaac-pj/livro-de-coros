
// import { PopoverPage } from './../popover/popover';
import {
  PopoverController,
  NavController,
  AlertController,
  ModalController,
  // NavParams,
  IonContent,
  IonSlides
} from '@ionic/angular';
import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  HostListener,
  OnInit
} from '@angular/core';
import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverPage } from '../shared/popover/popover';

// #TSLINT
// tslint:disable: no-string-literal

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})

export class MusicPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonSlides) slides: IonSlides;

  props: any = undefined;
  list: Songs[] = [];
  index: number;
  inListIndex: number;
  song: Songs;
  modal = false;
  sliding = false;
  color = 'secondary';
  number: number;
  current: number;
  fontSize = 16;
  fontSizeSlide = 32;

  constructor(
    private songsDao: SongsDaoProvider,
    private route: ActivatedRoute,
    private router: Router,
    public alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private changeDetector: ChangeDetectorRef,
    // public navParams: NavParams,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    if (this.route.snapshot.data['data']) {
      this.props = this.route.snapshot.data['data'];
    }

    this.index = this.props.index;
    this.list = this.props.lista;
    this.modal = this.props.modal;

    if (!this.list) {
      this.song = this.songsDao.getSong(this.index);
    } else {
      this.song = this.findSongInList(this.index);
    }
  }

  @HostListener('document:keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
      if (!this.sliding) { return false; }
      // this.slides.enableKeyboardControl(false);
      // e.key == 'ArrowLeft' && this.slides.isBeginning() ? this.prev() : null;
      // e.key == 'ArrowRight' && this.slides.isEnd() ? this.next() : null;

      e.key === 'ArrowLeft' ? this.slidePrev() : null;
      e.key === 'ArrowRight' ? this.slideNext() : null;

      //sem condição
      e.key === 'ArrowDown' ? this.prev() : null;
      e.key === 'ArrowUp' ? this.next() : null;

      // console.log(e.key);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightNavPage');
  }

  getFontSize() {
    return this.sliding ? `${this.fontSizeSlide}px` : `${this.fontSize}px`;
  }

  smallText() {
    if (this.sliding) {
      this.fontSizeSlide = this.fontSizeSlide > 10 ? this.fontSizeSlide -= 2 : this.fontSizeSlide;
    } else {
      this.fontSize = this.fontSize > 10 ? this.fontSize -= 2 : this.fontSize;
    }
  }

  bigText() {
    if (this.sliding) {
      this.fontSizeSlide = this.fontSizeSlide < 56 ? this.fontSizeSlide += 2 : this.fontSizeSlide;
    } else {
      this.fontSize = this.fontSize < 56 ? this.fontSize += 2 : this.fontSize;
    }
  }

  getLetra() {
    let letra: string = '';
// tslint:disable-next-line: forin
    for (const i in this.song.letra) {
      letra = letra.concat(this.song.letra[i]);
    }
    return letra;
  }

  slideMode() {
    this.sliding = this.sliding ? false : true;
    this.color = this.sliding ? 'white' : 'secondary';
    this.changeDetector.detectChanges();
    // this.content.resize();
  }

  goToSlide(index: number, time: number) {
    this.slides.slideTo(index, time);
    this.slides.update();
  }

  slideNext() {
    if (this.slides.isEnd()) {
      this.next();
    } else {
      this.slides.slideNext();
      this.slides.update();
    }
  }

  slidePrev() {
    if (this.slides.isBeginning()) {
      this.prev();
    } else {
      this.slides.slidePrev();
      this.slides.update();
    }
  }

  getCurrentSlide() {
    return this.slides ? this.slides.getActiveIndex() : null;
  }
  getNumberSlide() {
    return this.slides ? this.slides.length() : null;
  }

  close(event) {
    this.modalCtrl.dismiss();
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
    // o zero é um valor aceito
    if (value !== 0 && !value) { return false; }
    switch (value) {
      case 0:
        console.log(value);
        this.slideMode();
        break;
      case 1:
        alert('opção: ' + value);
        break;
      default:
        alert('opção: ' + value);
        break;
    }
  }

  async canNext() {
    // if (this.list) {
    //   return this.inListIndex < this.list.length - 1 ? true : false;
    // } else if (this.index < await this.songsDao.getSongs().length - 1) {
    //   return true;
    // }
    // return false;
  }

  next() {
    if (this.canNext()) {
      this.index++;
      this.inListIndex++;
      this.getSong();
      this.sliding ? this.goToSlide(0, 0) : null;
    } else {
      // this.index--;
      // this.inListIndex--;
    }
  }

  canPrev() {
    if (this.list) {
      return this.inListIndex > 0 ? true : false;
    } else if (this.index > 0) {
      return true;
    }
    return false;
  }

  prev() {
    if (this.canPrev()) {
      this.index--;
      this.inListIndex--;
      this.getSong();
      this.sliding ? this.goToSlide(0, 0) : null;
    } else {
      // this.index++;
      // this.inListIndex++;
    }
  }

  checker() {
    this.navCtrl.pop();
  }

  getSong() {
    if (!this.list) {
      this.getSongInSongs(this.index);
    } else {
      this.getSongInList(this.inListIndex);
    }
  }

  findSongInList(index: number) {
    for (const i in this.list) {
      if (this.list[i].ID === this.index) {
        this.inListIndex = Number.parseInt(i);
        return this.list[i];
      }
    }
  }

  getSongInList(index: number) {
    this.song = this.list[index];
  }

  getSongInSongs(index: number) {
    this.song = this.songsDao.getSong(index);
  }

  async showInfo() {
    const alert = await this.alertCtrl.create({
      header: 'Notas',
      message: this.song.notes ? this.song.notes : 'Ainda não há notas sobre está música',
      buttons: ['Ok']
    });
    await alert.present();

  //  let alert = this.alertCtrl.create({
  //     title: 'Comentários',
  //     message: this.song.comments ? this.song.comments: 'Ainda não há comentários para está música',
  //     inputs: [
  //       {
  //         name: 'comments',
  //         placeholder: 'toque para inserir um comentário'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Salvar',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  }
}
