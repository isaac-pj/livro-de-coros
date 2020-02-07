import { Injectable } from '@angular/core';
import { DataStorageProvider } from 'src/app/providers/data-storage/data-storage';
import { SongsService } from '../songs/songs.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    public dataStorageProvider: DataStorageProvider,
    private songsService: SongsService
  ) { }

  async resolve() {
    return await this.start();
  }

  async start() {
    await this.check('Songs', () => this.songsService.getSongs());
    await this.check('Lists', () => []);
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
