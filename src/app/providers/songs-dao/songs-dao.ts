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
  isDuplicated(arr: Array<Songs>, song: Songs) {
    let test = false;

    arr.forEach((value) => {
      test = value.ID === song.ID ? true : false;
    });

    return test;
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
