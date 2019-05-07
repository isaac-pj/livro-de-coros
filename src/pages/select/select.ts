import { RandomPage } from './../random/random';
import { SongsDaoProvider } from './../../providers/songs-dao/songs-dao';
import { ListsPage } from './../lists/lists';
import { List } from './../../models/list.model';

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

  searching:boolean = false;
  selecting:boolean = false;
  type:string = "text";
  placeHolder:string = "Search"
  songs:Songs[] = this.songsDao.getSongs();
  list:Songs[] = [];
  checked:boolean[] = [];

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

  // #INICIALIZAÇÂO
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  // #NAVEGAÇÂO

  //mudar para a pagina de gerae lista  
  pushPageGenerate(){
    let generateList = this.modalCtrl.create(RandomPage, {songs:this.songs});
    generateList.present();
    generateList.onDidDismiss((data)=>{
      if(data.list){
        this.list = data.list
        this.createList();
      }
    });
    return false;
  }

  //mudar para a pagina de musica  
  pushPageMusic(index:number){
    // this.navCtrl.push(RightNavPage, {index: index});
    this.presentMusicModal(index);
    return false;
  }


  // #INTERFACE

  //mudar para a pagina de musica por modal  
  presentMusicModal(index:number) {
    let musicModal = this.modalCtrl.create(RightNavPage, {index: index, modal:true});
    musicModal.present();
  }
  
  // axibe o modal para o usuario entra com as informações
  showCreateListAlert(nagativeAction, positiveAction) {
    return this.alertCtrl.create({
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
          nagativeAction()
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          positiveAction(data.listname)
        }
      }
    ]
    });
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

  cancel(event:any){
    this.search(null);
    if(this.searchbar) this.searchbar.value = "";
    this.navCtrl.pop();
    return false;
  }


  // #AÇÕES

  //apenas decide qual tipo de busca irá ser feito
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

  // buscar itens no banco
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

  // adiciona uma música na lista
  check(song:Songs){
    let index = this.list.indexOf(song)
    index === -1 ? this.add(song) : this.remove(index)
  }

  add(song){
    this.list.push(song)
  }

  remove(index:number){
    this.list.splice(index, 1)
  }

  // cria uma nova lista e exibe o alert
  createList(){

    if(!this.isEmpty()){
      const alert = this.showCreateListAlert( 
      () => null, 
      (listname) => {
        if(listname){
          let list = new List(listname,
          this.datePipe.transform(new Date(), "dd 'de' MMMM 'de' yyyy"),
          this.datePipe.transform(new Date(), "HH:mm"), "", this.list);
          
          this.listsDaoProvider.insert(list);
          this.navCtrl.setRoot(ListsPage, {});
        }
      });

      this.list.length < 5 || this.list.length > 20 ?
      this.showToast(
        "A lista precisa ter entre 5 e 20 músicas", 3000, "bottom") :
      alert.present();
    }
  }

  // #SUPORTE

  isEmpty(){
    return this.list.length > 0 ? false : true
  }

  inicialize(vector, size, value){
    for(let i = 0; i < size; i++) {
      vector[i] = value;
    }
    return vector;
  }

  //random entre dois numeros
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
