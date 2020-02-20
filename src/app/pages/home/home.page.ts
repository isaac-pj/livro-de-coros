import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { Songs } from 'src/app/models/songs.model';
import { animateCSS, noBubble } from 'src/app/utils/utils';
import BOOKS from 'src/app/enums/books.enum';
import { PreferencesProvider, CONFIGS } from 'src/app/providers/preferences/preferences';
import { Search } from 'src/app/interfaces/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, Search {

  @ViewChild('searchbar') searchbar;

  searching = false;
  type = 'search';
  songs: Songs[] = [];
  BOOKS: any = BOOKS;
  book: string = this.preferencesProvider.getPreference(CONFIGS.HOME.SELECTED_BOOK);

  constructor(
    public songsDaoProvider: SongsDaoProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public router: Router,
    public route: ActivatedRoute,
    public dataSetService: DataSetService,
    private preferencesProvider: PreferencesProvider,
  ) { }

  // #LIFECYCLE

  ngOnInit(): void {
    this.list(this.book);
  }

  // #ACTIONS

  public select(option: any) {
    this.book = option;
    this.list(option);
    this.preferencesProvider.setPreference(CONFIGS.HOME.SELECTED_BOOK, this.book);
  }

  // recuperar lista de musicas
  public async list(book: string) {
    this.songs = await this.songsDaoProvider.getSongs(book);
  }

  // ativar o modo de busca
  public search(type) {
    this.type = type;
    this.searching = true;
  }

  // tratar resultado da busca
  public onSearch(event) {
    const { result } = event;
    result ? this.songs = result : this.searchClose();
  }

  // encerrar todas as atividades de busca
  public searchClose() {
    this.list(this.book);
    this.searching = false;
  }

   // favoritar uma musica
  favorit(event, song: Songs ) {
    noBubble(event);
    const element = event.target;
    song.favorit = !song.favorit;
    this.songsDaoProvider.favorit(song.ID);
    animateCSS(element, 'bounceIn');
  }

  // #INTERFACE

  getSubtitle(letra: any) {
    return letra.estrofes[0]
    .reduce((line, next) => line.concat(` ${next}`));
  }

  // #NAVIGATION

  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
    if (this.type === 'numeric') { this.searchClose(); }
    return false;
  }

}
