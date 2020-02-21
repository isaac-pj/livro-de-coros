import { Injectable } from '@angular/core';
import { DataStorageProvider } from 'src/app/providers/data-storage/data-storage';
import { SongsService } from '../songs/songs.service';
import BOOKS from 'src/app/enums/books.enum';
import DBKEYS from 'src/app/enums/dbkeys.enum';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  availableBooks = [BOOKS.LDC, BOOKS.CC];

  constructor(
    public dataStorageProvider: DataStorageProvider,
    private songsService: SongsService
  ) { }

  async resolve() {
    return await this.start();
  }

  async start() {
    this.availableBooks.forEach(async book => {
      await this.check(book, () => this.songsService.getBook(BOOKS[book]));
    });
    await this.check(DBKEYS.LISTS, () => []);
    await this.check(DBKEYS.FAVORITS, () => []);
    return true;
  }

  async check(collection, resolve) {
    const value = await this.dataStorageProvider.get(collection);
    return value ? true : await this.populate(collection, resolve);
  }

  async populate(key, resolve) {
    return await this.dataStorageProvider.insert(key, resolve());
  }
}
