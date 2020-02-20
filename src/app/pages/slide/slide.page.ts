import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Songs } from 'src/app/models/songs.model';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonSlides, IonContent, MenuController } from '@ionic/angular';
import { PreferencesProvider, CONFIGS } from 'src/app/providers/preferences/preferences';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit, OnDestroy {

  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  props: any = undefined;
  list: Songs[] = [];
  song: Songs;
  index: number;
  fullscreen: any;
  fullscreenTimer = 3000;
  isFullscreen = true;
  fontSizeSlide = this.preferencesProvider.getPreference(CONFIGS.SLIDE.FONT_SIZE);

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private changeDetector: ChangeDetectorRef,
    private menuCtrl: MenuController,
    private preferencesProvider: PreferencesProvider,
  ) { }

  ngOnInit() {
    this.start();
    this.menuCtrl.enable(false);
    this.changeDetector.detectChanges();
    // this.setFullscreen(this.fullscreenTimer);
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }

  start() {
    this.getParams();
    this.updateSong();
  }

  async getParams() {
    if (this.activatedRoute.snapshot.data['data']) {
      this.props = this.activatedRoute.snapshot.data['data'];
    }

    this.index = this.props.index;
    this.list = this.props.list;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    // this.slides.enableKeyboardControl(false);
    // e.key == 'ArrowLeft' && this.slides.isBeginning() ? this.prev() : null;
    // e.key == 'ArrowRight' && this.slides.isEnd() ? this.next() : null;

    e.key === 'ArrowLeft' ? this.slidePrev() : null;
    e.key === 'ArrowRight' ? this.slideNext() : null;

    e.key === 'ArrowDown' ? this.prev() : null;
    e.key === 'ArrowUp' ? this.next() : null;
  }

  // #SLIDE_ACTIONS

  goToSlide(index: number, time: number) {
    this.slides.slideTo(index, time);
  }

  slideNext() {
    this.slides.isEnd().then( value => {
      value ? this.next() : this.slides.slideNext();
    });
  }

  slidePrev() {
    this.slides.isBeginning().then( value => {
      value ? this.prev() : this.slides.slidePrev();
    });
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
        this.slides.slideTo(0, 0);
    }
  }

  async prev() {
    if (this.hasPrev()) {
      this.index--;
      this.updateSong();
      await this.slides.update();
      this.slides.slideTo(await this.slides.length(), 0);
    }
  }

  updateSong() {
    return this.song = this.list[this.index];
  }


  // #INTERFACE

  setFullscreen(timer) {
    this.fullscreen = setTimeout(() => {
      this.isFullscreen = true;
    }, timer);
  }

  showToolbars() {
    this.isFullscreen = false;
    clearTimeout(this.fullscreen);
  }

  hideToolbars() {
    this.setFullscreen(this.fullscreenTimer);
  }

  getFontSize() {
    return `${this.fontSizeSlide}px`;
  }

  smallText() {
    this.fontSizeSlide = this.fontSizeSlide > 10 ? this.fontSizeSlide -= 2 : this.fontSizeSlide;
    this.preferencesProvider.setPreference(CONFIGS.SLIDE.FONT_SIZE, this.fontSizeSlide);
  }

  bigText() {
    this.fontSizeSlide = this.fontSizeSlide < 56 ? this.fontSizeSlide += 2 : this.fontSizeSlide;
    this.preferencesProvider.setPreference(CONFIGS.SLIDE.FONT_SIZE, this.fontSizeSlide);
  }

  // #NAVIGATIONS

  close() {
    this.navCtrl.back();
  }

}
