import { Songs } from './../../models/songs.model';
import { SongsService } from '../../services/songs/songs.service';
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
    public songsService: SongsService) {}

  // #SONGS
  async getSongs(book?: string) {
    this.book = book ? book : this.book;
    this.songs = await this.updateSongs(this.book);
    return this.songs;
  }

  // recebe um indice e retorno o coro correspondente
  getSong(ID: number) {
    const [first] = this.songs.filter(song => song.ID === ID);
    return first;
  }

  // retorna a quantidade de musicas na lista
  getAmountOfSongs() {
    return this.songs ? this.songs.length : null;
  }

  // atualiza a lista de musicas
  async updateSongs(book: string) {
    let songs = [];
    if (book === BOOKS.ALL) {
      songs = [...songs, ...await this.dataStorageProvider.get(BOOKS.LDC)];
      songs = [...songs, ...await this.dataStorageProvider.get(BOOKS.CC)];
    } else {
      songs = [...songs, ...await this.dataStorageProvider.get(book)];
    }
    return this.parseSongs(songs);
  }

  // apaga a chave Songs
  public clear() {
    this.dataStorageProvider.remove(BOOKS.LDC);
    this.dataStorageProvider.remove(BOOKS.CC);
  }

  private async parseSongs(songs: Songs[]) {
    await this.getFavorits();
    return songs.map((song, index, book) => {
      song.favorit = this.favorits && this.isFavorit(song.ID) ? true : false;
      return song;
    });
  }

  // #FAVORITS

  private isFavorit(ID: number): boolean {
    return this.favorits.includes(ID);
  }

  private async getFavorits() {
    this.favorits = await this.dataStorageProvider.get(DBKEYS.FAVORITS);
    return this.favorits;
  }

  // grava uma música favorita no banco
  public async favorit(ID: number) {
    const index = this.favorits.findIndex(value => value === ID);
    this.isFavorit(ID) ? this.favorits.splice(index, 1) : this.favorits.push(ID);
    await this.dataStorageProvider.update(DBKEYS.FAVORITS, this.favorits);
    return this.updateSongs(this.book);
  }


  // #SEARCH
  isDuplicated(arr: Array<Songs>, song: Songs) {
    arr = arr.filter(value => value.ID === song.ID);
    return !!arr.length;
  }

  isValid(value) {
    return value && value.trim() !== '' ? true : false;
  }

  nomalizeQuery(query): string {
    return query.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\s\w#]/, ' ')
    .replace(/[^\s\w#]/g, '');
  }

  // retorno o resultado de uma busca que bater com o numero passado
  searchByNumber(value: number) {
    if (!this.isValid(value)) { return this.songs; }

    const searchResult: Songs[] = this.songs.filter( song => {
      if (song.numero.toString().indexOf(value.toString()) !== -1) {
        return true;
      }
    });

    return searchResult;
  }

  // retorno o resultado de uma busca que bater com a string passada
  searchByString(value: string) {
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
