import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { Songs } from 'src/app/models/songs.model';
import { animateCSS, noBubble } from 'src/app/utils/utils';
import BOOKS from 'src/app/enums/books.enum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('searchbar') searchbar;

  searching = false;
  type = 'search';
  songs: Songs[] = [];
  BOOKS: any = BOOKS;
  book: string = BOOKS.ALL;

  constructor(
    public songsDaoProvider: SongsDaoProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public router: Router,
    public route: ActivatedRoute,
    public dataSetService: DataSetService,
  ) { }

  // #LIFECYCLE

  ngOnInit(): void {
    this.list(this.book);
  }

  // #ACTIONS

  public select(option: any) {
    this.book = option;
    this.list(option);
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
  onSearch(event) {
    const { result } = event;
    result ? this.songs = result : this.searchClose();
  }

  // encerrar todas as atividades de busca
  private searchClose() {
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
