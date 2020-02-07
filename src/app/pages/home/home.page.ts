import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
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
  type = 'search';
  songs: Songs[] = [];

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
    this.list();
  }

  // #ACTIONS

  // recuperar lista de musicas
  public async list() {
    this.songs = await this.songsDaoProvider.getSongs();
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
    this.list();
    this.searching = false;
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

  // #INTERFACE

  getSubtitle(letra: any) {
    return letra.estrofes[0]
    .reduce((line, next) => line.concat(` ${next}`));
  }

  // #NAVIGATION

  // mudar para a pagina de musica
  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
    // this.router.navigate(['/music/', index], {relativeTo: this.route});

    if (this.type === 'numeric') { this.searchClose(); }
    return false;
  }

}
