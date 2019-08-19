import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { Songs } from '../../models/songs.model';
import { List } from '../../models/list.model';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, IonReorderGroup } from '@ionic/angular';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { ActivatedRoute } from '@angular/router';
import { getRandomInt } from 'src/app/utils/utils';
import { SongsDaoProvider } from '../../providers/songs-dao/songs-dao';
import { isEquals, cloneArray } from 'src/app/utils/utils';

@Component({
  selector: 'page-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('input') input: ElementRef;
  index: number;
  list: List;
  songs: Songs[] = [];
  songsTemp: Songs[] = [];
  checked: Songs[] = [];
  expanded = false;
  commentsEditing: boolean;
  editing = false;
  comments: string;
  desmarcado = false;
  marcado = true;
  props: any = undefined;

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(
    public navCtrl: NavController,
    private listsDaoProvider: ListsDaoProvider,
    private songsDaoProvider: SongsDaoProvider,
    private dataSetService: DataSetService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.start();
    this.commentsEditing = this.list.comments ? false : true;
  }

  getParams() {
    // this.list = this.navParams.get("lista");
    // this.index = this.navParams.get("index");

    if (this.route.snapshot.data['data']) {
      this.props = this.route.snapshot.data['data'];
    }

    this.list = this.props.lista;
    this.index = this.props.index;
  }

  start() {
    this.getParams();
    this.songs = this.list.songs;
    this.comments = this.list.comments;
  }

  // #ACTIONS_LIST

  editList() {
    this.editing = true;
    this.songsTemp = cloneArray(this.songs);
  }

  addMusic() {
    if (this.songsTemp.length < 20) {
      this.songsTemp = cloneArray(this.songs);
      this.songsTemp.push(this.songsDaoProvider.getSong(
        getRandomInt(0, this.songsDaoProvider.getAmountOfSongs())));
      this.saveList();
    }
  }

  updateMusic(event: Event, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.songsTemp[index] = this.songsDaoProvider.getSong(
      getRandomInt(0, this.songsDaoProvider.getAmountOfSongs()));
  }

  removeMusic(event: Event, index: number) {
    event.preventDefault();
    event.stopPropagation();
    if (this.songsTemp.length > 2) {
      // this.songs.splice(index, 1);
      this.songsTemp = this.songsTemp.filter(
        (song, idx, arr) => arr.indexOf( song ) !== index );
    } else {
      // implement toast msg
    }
  }

  reorderMusic(ev: any) {
    this.list.songs.splice(ev.detail.to, 0, this.list.songs.splice(ev.detail.from, 1)[0]);
    this.listsDaoProvider.update(this.index, this.list);
    ev.detail.complete();
  }

  cancelChange() {
    this.editing = false;
    // this.songs = this.songsTemp;
  }

  saveList() {
    this.editing = false;
    if (!isEquals(this.songs, this.songsTemp)) {
      this.songs = this.list.songs = cloneArray(this.songsTemp);
      this.listsDaoProvider.update(this.index, this.list);
    }
  }

  // #ACTIONS_COMMENTS

  edit() {
    this.commentsEditing = true;
  }

  save(msg: string) {
    if (msg) {
      this.list.comments = msg;
      this.listsDaoProvider.update(this.index, this.list);
      this.comments = this.list.comments;
      this.commentsEditing = false;
    }
  }

  cancel(value) {
    this.commentsEditing = this.list.comments ? false : true;
    this.expanded = false;
  }

  clear() {
    if (!this.list.comments) { return false; }
    this.listsDaoProvider.update(this.index, this.list);
    this.list.comments = '';
    this.comments = this.list.comments;
    this.commentsEditing = true;
  }

  // #ITERFACE
  expandItem(event) {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  // #ACTIONS

  check(event, song: Songs) {
    event.preventDefault();
    event.stopPropagation();
    this.checked.unshift(song);
    this.updateList();
  }

  uncheck(index) {
    this.checked.splice(index, 1);
    this.updateList();
  }

  updateList() {
    this.songs = this.list.songs.filter((elem, index, songs) => {
      // return array.indexOf( elem ) === index;
      return (this.checked.indexOf(elem) === -1);
    });
  }

  // #NAVIGATION

  // mudar para a pagina de musica
  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
  }

}

/*

  ES6
  array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );

*/

