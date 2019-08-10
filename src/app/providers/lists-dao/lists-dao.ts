import { List } from '../../models/list.model';
import { Injectable } from '@angular/core';
import { DataStorageProvider } from '../data-storage/data-storage';


@Injectable({ providedIn: 'root' })
export class ListsDaoProvider {

  lists: List[] = [];

  // inicializa o arquivo
  constructor(
    private dataStorageProvider: DataStorageProvider
  ) {}

  // recupera todas as listas do banco
  async getLists() {
    if (this.lists.length) {
      return this.lists;
    }

    this.lists = await this.updateLists();
    console.log(this.lists);
    return this.lists;
  }

  // atualiza as listas pelo banco
  async updateLists() {
    return await this.dataStorageProvider.get('Lists');
  }

  // inseri dados na lista
  public createList(list: List) {
    this.lists.unshift(list);
    this.dataStorageProvider.insert('Lists', this.lists);
  }

  // remove algo da lista
  public removeList(index: number) {
    this.lists.splice(index, 1);
    this.dataStorageProvider.insert('Lists', this.lists);
  }

  // apaga todas as listas
  public clearLists() {
    this.dataStorageProvider.remove('Lists');
  }

  // atualiza algo na lista
  public update(index: number, list: List) {
    this.lists[index] = list;
    this.dataStorageProvider.insert('Lists', this.lists);
  }

}
