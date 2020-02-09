import { Songs } from '../../models/songs.model';
import LDC from './resouces/coros';
import CC from './resouces/hinos';

export class SongsService {

  private songs = { LDC, CC };

  getBook(name: string) {
    return this.songs[name];
  }

  getBooks(names?: string[]) {
    return names ?
    names.map( name => this.getBook(name)) :
    Object.values(this.songs);
  }

}
