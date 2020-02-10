import { Songs } from './../../models/songs.model';
import { Injectable } from '@angular/core';
import { DataStorageProvider } from '../data-storage/data-storage';
import BOOKS from 'src/app/enums/books.enum';
import DBKEYS from 'src/app/enums/dbkeys.enum';

@Injectable({ providedIn: 'root' })
export class SongsDaoProvider {

  private songs: Songs[];
  private favorits: number[];
  private book: string;

  constructor(
    private dataStorageProvider: DataStorageProvider,
  ) {}

  // #SONGS

  public async getSongs(book?: string) {
    this.book = book ? book : this.book;
    this.songs = await this.updateSongs(this.book);
    return this.songs;
  }

  public getSong(ID: number) {
    const [first] = this.songs.filter(song => song.ID === ID);
    return first;
  }

  public getAmountOfSongs() {
    return this.songs ? this.songs.length : null;
  }

  private async updateSongs(book: string) {
    let songs = [];
    if (book === BOOKS.ALL) {
      const labels = Object.values(BOOKS).slice(1);
      for (const lable of labels) {
        songs = [...songs, ...await this.dataStorageProvider.get(lable)];
      }
    } else {
      songs = [...songs, ...await this.dataStorageProvider.get(book)];
    }

    return this.parseSongs(songs);
  }

  public clear() {
    this.dataStorageProvider.remove(BOOKS.LDC);
    this.dataStorageProvider.remove(BOOKS.CC);
  }

  private async parseSongs(songs: Songs[]) {
    await this.getFavorits();
    return songs.map(song => {
      song.favorit = this.favorits && this.isFavorit(song.ID) ? true : false;
      return song;
    });
  }

  // #FAVORITS

  private isFavorit(ID: number): boolean {
    return this.favorits.includes(ID);
  }

  public async getFavorits() {
    return this.favorits = await this.dataStorageProvider.get(DBKEYS.FAVORITS);
  }

  public async favorit(ID: number) {
    const index = this.favorits.findIndex(value => value === ID);
    this.isFavorit(ID) ? this.favorits.splice(index, 1) : this.favorits.push(ID);
    await this.dataStorageProvider.update(DBKEYS.FAVORITS, this.favorits);
    return this.updateSongs(this.book);
  }


  // #SEARCH

  private isDuplicated(arr: Array<Songs>, song: Songs) {
    arr = arr.filter(value => value.ID === song.ID);
    return !!arr.length;
  }

  private isValid(value) {
    return value && value.trim() !== '' ? true : false;
  }

  private nomalizeQuery(query): string {
    return query.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\s\w#]/, ' ')
    .replace(/[^\s\w#]/g, '');
  }

  public searchByNumber(value: number) {
    if (!this.isValid(value)) { return this.songs; }

    const searchResult: Songs[] = this.songs.filter( song => {
      if (song.numero.toString().indexOf(value.toString()) !== -1) {
        return true;
      }
    });

    return searchResult;
  }

  public searchByString(value: string) {
    if (!this.isValid(value)) { return this.songs; }
    const query = this.nomalizeQuery(value);

    const inTitle = this.songs.filter( song => {
      const titulo = this.nomalizeQuery(song.titulo);
      const numero = this.nomalizeQuery(song.numero.toString());

      if (titulo.indexOf(query) !== -1 || numero.indexOf(query) !== -1) {
        return true;
      }
    });

    const inLyrics = this.songs.filter( song => {
      const letra = this.nomalizeQuery(JSON.stringify(song.letra));

      if (letra.indexOf(query) !== -1
      && !this.isDuplicated(inTitle, song)) {
        return true;
      }
    });

    return [...inTitle, ...inLyrics];
  }

}
