// import { ListsDaoProvider } from '../../providers/general-dao/lists-dao';
// import { SelectPage } from './../select/select';
import { Component, ViewChild, OnInit, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { NavController, ModalController, LoadingController} from '@ionic/angular';
import { MusicPage } from '../music/music.page';
import { SongsService } from '../../services/songs.service';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { Songs } from 'src/app/models/songs.model';
import { animateCSS } from 'src/app/utils/utils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('searchbar') searchbar;

  searching = false;
  type = 'text';
  placeHolder = 'Search';
  songs: Songs[] = [];

  constructor(
    public songsService: SongsService,
    public songsDaoProvider: SongsDaoProvider,
    // public listsDaoProvider: ListsDaoProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    // public loadingCtlr: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
    public dataSetService: DataSetService
  ) {
    // this.listsDaoProvider.reset();
    // this.songsService.changeSongs();
  }

  // #LIFECYCLE

  ngOnInit(): void {
    this.list();
  }

  // #ACTIONS

  // recuperar lista de musicas
  public async list() {
    this.songs = await this.songsDaoProvider.getSongs();
  }

  // realizar busca passando o tipo
  public getSearchItems() {
    this.songs = this.type === 'number' ?
    this.songsDaoProvider.searchByNumber(this.searchbar.value) :
    this.songsDaoProvider.searchByString(this.searchbar.value);
  }

  // ativar o modo de busca
  private search() {
    this.searching = true;
    setTimeout(() => {
      this.searchbar.setFocus();
    }, 150);
  }

  // alterar interface para buscar por numero
  public changeSearchToNumber() {
    this.type = 'number';
    this.placeHolder = 'Digite o numero:';
    this.search();
  }

  // alterar interface para buscar por string
  public changeSearchToString() {
    this.type = 'text';
    this.placeHolder = 'Digite o nome ou um trecho:';
    this.search();

    // console.log(this.searchbar.el.classList);
    // const element = this.searchbar.el;
    // animateCSS(element, 'zoomIn');
  }

  // encerrar todas as atividades de busca
  public searchClose() {
    this.searching = false;
    this.searchbar.value = '';
    this.searchClear();
  }

  // apenas limpar o campo de busca
  public searchClear() {
    this.list();
  }

   // favoritar uma musica
  favorit(event, index: number ) {
    // interrompendo a propagação do evento
    event.preventDefault();
    event.stopPropagation();

    const element = event.target;
    // this.songs[index].favorit = !this.songs[index].favorit;
    this.songsDaoProvider.favorit(index).catch((err) => {
      // futuramente implementar um toast para mostrar o erro
      console.log(err);
      this.list();
    });

    animateCSS(element, 'bounceIn');
  }

  // #NAVIGATION

  // mudar para a pagina de seleção
  pushPageSelect() {
    // this.navCtrl.push(SelectPage, {});
    this.searchClose();
    return false;
  }

  // mudar para a pagina de musica
  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
    // this.router.navigate(['/music/', index], {relativeTo: this.route});

    if (this.type === 'number') { this.searchClose(); }
    return false;
  }

}
