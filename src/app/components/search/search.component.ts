import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
import { Songs } from 'src/app/models/songs.model';
import search from './search.enums';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {

  @ViewChild('searchbar') searchbar;
  @Input() songs: Songs[];
  @Input() active: boolean;
  @Input() type: string;
  @Output() result = new EventEmitter();

  constructor(
    public songsDaoProvider: SongsDaoProvider
  ) { }

  ngOnInit() {
    this.setFocus();
  }

  ngOnChanges(changes) {
    const { active, type } = changes;
    if (active && active.currentValue === true || type) {
      this.setFocus();
    }
  }

  public getSearchItems() {
    const result = this.type === search.types.NUMERIC ?
    this.songsDaoProvider.searchByNumber(this.searchbar.value) :
    this.songsDaoProvider.searchByString(this.searchbar.value);
    this.result.emit({result});
  }

  public async searchClear() {
    const result = await this.songsDaoProvider.getSongs();
    this.result.emit({result});
  }

  public searchClose() {
    this.result.emit({result: null});
  }

  public setPlaceholder() {
    return this.type === search.types.NUMERIC ?
    search.placeholder.NUMERIC : search.placeholder.STRING;
  }

  public setFocus() {
    this.searchbar.value = '';
    setTimeout(() => {
      this.searchbar.setFocus();
    }, 500);
  }
}
