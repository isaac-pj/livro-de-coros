import { Songs } from './../../models/songs.model';
import { SongsService } from './../../services/songs.service';
import { Injectable } from '@angular/core';
import { DataStorageProvider } from '../data-storage/data-storage';

@Injectable({ providedIn: 'root' })
export class SongsDaoProvider {

  private songs: Songs[] = [];

  constructor(
    private dataStorageProvider: DataStorageProvider,
    public songsService: SongsService) {}

  // #ACTIONS
  async getSongs() {
    if (this.songs.length) {
      return this.songs;
    }

    this.songs = await this.updateSongs();
    return this.songs;
  }

  // recebe um indice e retorno o coro correspondente
  getSong(index: number) {
    return (this.songs[index]);
  }

  // retorna a quantidade de musicas na lista
  getAmountOfSongs() {
    if (this.songs) {
      return this.songs.length;
    }
  }

  // atualiza a lista de musicas
  async updateSongs() {
    return await this.dataStorageProvider.get('Songs');
  }

  // grava uma música favorita no banco
  public favorit(index: number) {
    this.songs[index].favorit = !this.songs[index].favorit;
    return this.dataStorageProvider.insert('Songs', this.songs)
    .then(() => this.updateSongs());
  }

  // apaga a chave Songs
  public clear() {
    this.dataStorageProvider.remove('Songs');
  }

  // #SEARCH
  isDuplicated(searchResult: Array<Songs>, song: Songs) {
    let test = false;
// tslint:disable-next-line: forin
    for(const i in searchResult) {
      test = searchResult[i].ID === song.ID ? true : test;
    }
    return test;
  }

  isValid(value) {
    return value && value.trim() !== '' ? true : false;
  }

  // retorno o resultado de uma busca que bater com o numero passado
  searchByNumber(value: number) {
    if (!this.isValid(value)) { return this.songs; }
    const searchResult: Songs[] = [];

    for (const i in this.songs) {
      if (this.songs[i].numero.toString().indexOf(value.toString()) !== -1) {
        searchResult.push(this.getSong(parseInt(i, 10)));
      }
    }

    return searchResult;
  }

  // retorno o resultado de uma busca que bater com a string passada
  searchByString(value: string) {
    if (!this.isValid(value)) { return this.songs; }
    const searchResult: Songs[] = [];

    for (const i in this.songs) {
      if (this.songs[i].titulo.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      this.songs[i].numero.toString().indexOf(value.toLowerCase()) !== -1) {
        searchResult.push(this.getSong(parseInt(i, 10)));
      }
    }

    for (const i in this.songs) {
      if (JSON.stringify(this.songs[i].letra).toLowerCase().indexOf(value.toLowerCase()) !== -1
      && !this.isDuplicated(searchResult, this.songs[i])) {
        searchResult.push(this.getSong(parseInt(i, 10)));
      }
    }

    return searchResult;
  }

}
