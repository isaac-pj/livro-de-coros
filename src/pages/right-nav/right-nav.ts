import { PopoverPage } from './../popover/popover';
import { ViewController, Content } from 'ionic-angular';
import { Component, ViewChild, ChangeDetectorRef, HostListener} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Songs } from './../../models/songs.model';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { PopoverController, Slides } from 'ionic-angular';

/**
 * Generated class for the RightNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-right-nav',
  templateUrl: 'right-nav.html',
})

export class RightNavPage {

  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;

  list:Songs[] = [];
  index:number;
  inListIndex:number;
  song:Songs;
  modal:boolean = false;
  sliding: boolean = false;
  color="secondary";
  number: number;
  current: number;
  fontSize:number = 1;
  fontSizeSlide:number = 4;
  size:string[] = ['xxx-small','xx-small', 'small', 'medium', 'large', 'xx-large', 'xxx-large'];
  

  constructor(private changeDetector : ChangeDetectorRef, public viewCtrl: ViewController, public popoverCtrl: PopoverController, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private songsDao: SongsDaoProvider) {
    this.index = navParams.get("index");
    this.list = navParams.get("lista");
    this.modal = navParams.get("modal");
    if(!this.list){
      this.song = this.songsDao.getSong(this.index);
    }else{
      this.song = this.findSongInList(this.index);
    }  

  }
  @HostListener('document:keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
      if(!this.sliding) return false;
      this.slides.enableKeyboardControl(false);
      // e.key == 'ArrowLeft' && this.slides.isBeginning() ? this.prev() : null;
      // e.key == 'ArrowRight' && this.slides.isEnd() ? this.next() : null;
      
      e.key == 'ArrowLeft' ? this.slidePrev() : null;
      e.key == 'ArrowRight' ? this.slideNext() : null;

      //sem condição
      e.key == 'ArrowDown' ? this.prev() : null;
      e.key == 'ArrowUp' ? this.next() : null;
      
      // console.log(e.key);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightNavPage');
  }

  smallText(){
    if(this.sliding){
      this.fontSizeSlide > 0 ? this.fontSizeSlide-- : null;
    }else{
      this.fontSize > 0 ? this.fontSize-- : null;      
    }
  }

  bigText(){
    if(this.sliding){
      this.fontSizeSlide < 6 ? this.fontSizeSlide++ : null;
    }else{    
      this.fontSize < 6 ? this.fontSize++ : null;
    }
  }

  getLetra(){
    let letra:string = "";
    for(let i in this.song.letra){
      letra = letra.concat(this.song.letra[i]);
    }
    return letra;
  }

  slideMode(){
    this.sliding = this.sliding ? false : true;
    this.color = this.sliding ? "white" : "secondary";
    this.changeDetector.detectChanges();
    this.content.resize();
  }

  goToSlide(index:number, time:number){
    this.slides.slideTo(index, time);
    this.slides.update();
  }

  slideNext(){
    if(this.slides.isEnd()){
      this.next();
    }else{
      this.slides.slideNext();
      this.slides.update();    
    }
  }

  slidePrev(){
    if(this.slides.isBeginning()){
      this.prev();
    }else{
      this.slides.slidePrev();
      this.slides.update();
    }
  }

  getCurrentSlide(){
    return this.slides ? this.slides.getActiveIndex() : null;
  }
  getNumberSlide(){
    return this.slides ? this.slides.length() : null;
  }

  close(event){
    this.viewCtrl.dismiss();
  }

  more(event, options:string[]) {
    const popover = this.popoverCtrl.create(PopoverPage, {data:options});
    popover.present({ev:event});
    popover.onDidDismiss((data) => this.popoverResponse(data ? data.idx : null));
  }

  popoverResponse(value:number){
    if(value != 0 && !value) return false;
    switch(value){
      case 0:
        this.slideMode();
      break;
      case 1:
        alert("opção: "+value);
      break;
      default:
        alert("opção: "+value);
      break;
    }
  }

  canNext(){
    if(this.list){
      return this.inListIndex < this.list.length-1 ? true:false;
    }else if(this.index < this.songsDao.getSongs().length-1){
      return true;
    }
    return false;
  }

  next(){
    if(this.canNext()){
      this.index++;
      this.inListIndex++;
      this.getSong();
      this.sliding ? this.goToSlide(0, 0) : null;
    }else{
      // this.index--;
      // this.inListIndex--;
    }
  }

  canPrev(){
    if(this.list){
      return this.inListIndex > 0 ? true:false;
    }else if(this.index > 0){
      return true;      
    }  
    return false;
  }

  prev(){
    if(this.canPrev()){
      this.index--;
      this.inListIndex--;      
      this.getSong();
      this.sliding ? this.goToSlide(0, 0) : null;
    }else{
      // this.index++;
      // this.inListIndex++;            
    }
  }

  checker(){
    this.navCtrl.pop();
  }

  getSong(){
    if(!this.list){
      this.getSongInSongs(this.index);
    }else{
      this.getSongInList(this.inListIndex);
    }    
  }

  findSongInList(index:number){
    for(let i in this.list){
      if(this.list[i].ID == this.index){
        this.inListIndex = Number.parseInt(i);
        return this.list[i]; 
      } 
    }
  }

  getSongInList(index:number){
    this.song = this.list[index];
  }

  getSongInSongs(index:number){
    this.song = this.songsDao.getSong(index);
  }

  showInfo(){
    let alert = this.alertCtrl.create({
      title: 'Notas',
      message: this.song.notes ? this.song.notes: 'Ainda não há notas sobre está música',
      buttons: ['Ok']
    });
    alert.present();

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
