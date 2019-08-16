import { ListsDaoProvider } from '../../providers/lists-dao/lists-dao';
import { Songs } from '../../models/songs.model';
import { List } from '../../models/list.model';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, IonReorderGroup } from '@ionic/angular';
import { DataSetService } from 'src/app/services/dataSet/data-set.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  checked: Songs[] = [];
  expanded = false;
  editing: boolean;
  comments: string;
  desmarcado = false;
  marcado = true;
  props: any = undefined;


  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(
    public navCtrl: NavController,
    private listsDaoProvider: ListsDaoProvider,
    private dataSetService: DataSetService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.start();
    this.editing = this.list.comments ? false : true;
    console.log(this.input);
  }

  getParams() {
    // this.list = this.navParams.get("lista");
    // this.index = this.navParams.get("index");

    if (this.route.snapshot.data['data']) {
      this.props = this.route.snapshot.data['data'];
    }

    console.log(this.props);

    this.list = this.props.lista;
    this.index = this.props.index;
  }

  save(msg: string) {
    if (msg) {
      this.list.comments = msg;
      this.listsDaoProvider.update(this.index, this.list);
      this.comments = this.list.comments;
      this.editing = false;
    }
  }

  edit() {
    this.editing = true;
  }

  cancel(value) {
    this.editing = this.list.comments ? false : true;
    this.expanded = false;
  }

  clear() {
    if (!this.list.comments) { return false; }
    this.listsDaoProvider.update(this.index, this.list);
    this.list.comments = '';
    this.comments = this.list.comments;
    this.editing = true;
  }

  expandItem(event) {
    event.stopPropagation();
    this.expanded = this.expanded ? false : true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  pushPageMusic(index: number) {
    // this.navCtrl.push(RightNavPage, {index: index, lista:this.list.songs});
  }

  // mudar para a pagina de musica
  goToMusic(index: number) {
    this.dataSetService.setData(index, {index});
  }

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
      return (this.checked.indexOf(elem) == -1);
    });

  }

  start() {
    this.getParams();
    this.songs = this.list.songs;
    this.comments = this.list.comments;
  }

  // ES6
  // array.filter( ( elem, index, arr ) => arr.indexOf( elem ) === index );

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    const temp: Songs = this.list.songs[ev.detail.from];
    this.list.songs[ev.detail.from] = this.list.songs[ev.detail.to];
    this.list.songs[ev.detail.to] = temp;
    this.listsDaoProvider.update(this.index, this.list);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}

