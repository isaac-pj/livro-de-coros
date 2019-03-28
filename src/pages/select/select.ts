import { RandomPage } from './../random/random';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { ListsPage } from './../lists/lists';
import { Lists } from './../../models/lists.model';

import { RightNavPage } from './../right-nav/right-nav';
import { SongsService } from './../../services/songs.service';
import { Songs } from './../../models/songs.model';
import { ListsDaoProvider } from './../../providers/general-dao/lists-dao';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, ToastController } from 'ionic-angular';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  @ViewChild('searchbar') searchbar;

  isEmpty:boolean = true;
  searching:boolean = false;
  selecting:boolean = false;
  checked:boolean[] = [];
  type:string = "text";
  placeHolder:string = "Search"
  songs:Songs[] = this.songsDao.getSongs();
  list:Songs[] = [];

  constructor(
    public toastCtrl: ToastController, 
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private alertCtrl: AlertController, 
    public songsService: SongsService,
    public songsDao: SongsDaoProvider, 
    public listsDaoProvider: ListsDaoProvider,
    private datePipe: DatePipe
  ) {
     
    this.checked = this.inicialize(this.checked, this.songs.length, false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  showToast(msg, time, position){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  search(type:number){
    if(type == null){
      this.searching = false;
      this.songs = this.songsDao.getSongs();
    }else{
      this.searching = true;
    }

    if(type == 1){
      this.type = "number";
      this.placeHolder = "Digite o numero:";
    }else if(type == 2){
      this.type = "text";
      this.placeHolder = "Digite o nome ou um trecho:";
    }

    if(this.searching == true){
      setTimeout(() => {
        this.searchbar.setFocus();
      },150);
    }

  }

  getItems(value:any){
    if(value && value.trim() != ''){
      if(this.type == "number"){
        this.songs = this.songsDao.searchByNumber(value);
      }else{
        this.songs = this.songsDao.searchByString(value);
      }
    }else{
      this.songs = this.songsDao.getSongs();
    }
  }

  cancel(event:any){
    this.search(null);
    if(this.searchbar) this.searchbar.value = "";
    this.navCtrl.pop();
    return false;
  }

  inicialize(vector, size, value){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }

  addInList(){
    this.list = [];
    let songs:Songs[] = this.songsDao.getSongs();
    let founded:boolean = false;

    for(let i in this.checked) {
      if(this.checked[i] == true){
        this.list.push(songs[i]);
        founded = true;
      }
    }
    return founded;
  }

  createList() {
    if(this.addInList()){
      let alert = this.alertCtrl.create({
      title: 'Como devo Chamar?',
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

            console.log('Cancel clicked');
            this.list = [];

          }
        },
        {
          text: 'Salvar',
          handler: data => {

            console.log('Create clicked');
            if(data.listname && this.list.length > 0){

              let list = new Lists(data.listname,
              this.datePipe.transform(new Date(), "dd 'de' MMMM 'de' yyyy"),
              this.datePipe.transform(new Date(), "HH:mm"), "", this.list);
              this.listsDaoProvider.insert(list);
              this.navCtrl.setRoot(ListsPage, {});

            }
          }
        }
      ]
    });
    this.list.length < 2 || this.list.length > 20 ? this.showToast("A lista precisa ter entre 2 e 20 músicas", 3000, "bottom") :  alert.present();
    }
  }

  //mudar para a pagina de gerar lista  
  pushPageGenerate(){
    let gerarLista = this.modalCtrl.create(RandomPage, {songs:this.songs});
    gerarLista.present();
    gerarLista.onDidDismiss((data)=>{
      data.list ? this.check(data.list) : null ;
      // console.log(data.list);
    });
    return false;
  }

   //mudar para a pagina de musica  
  pushPageMusic(index:number){
    // this.navCtrl.push(RightNavPage, {index: index});
    this.presentMusicModal(index);
    return false;
  }


  //mudar para a pagina de musica por modal  
  presentMusicModal(index:number) {
    let musicModal = this.modalCtrl.create(RightNavPage, {index: index, modal:true});
    musicModal.present();
  }

  //retorna true se existir pelo menos um item selecionado, caso contrário retorna false
  isChecked(index:number){
    for (let i in this.checked){
      if(this.checked[i] == true){
        this.isEmpty = false;
        return true;
      }
    }
    this.isEmpty = true;
    return false;
  }

  //gerar lista aleatoriamente
  generateList(size){
    
    this.checked = this.inicialize(this.checked, this.songs.length, false);

    for(let i = 0; i < size; i++){
      let index = this.getRandomInt(0, this.songs.length-1);
      this.checked[index] = true;
      // alert(this.getRandomInt(0, this.songs.length-1));
    }
    this.isChecked(0);
    this.createList();
  }

  //random entre dois numeros
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //marca uma lista com uma lista nova e cria a lista
  check(songs:Songs[]){
    this.checked = this.inicialize(this.checked, this.songs.length, false);

    for(let i in songs){
      let index = songs[i].ID;
      this.checked[index] = true;
    }

    this.isChecked(0);
    this.createList();

  }

}
