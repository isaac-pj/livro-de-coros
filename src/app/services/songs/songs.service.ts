import { Songs } from '../../models/songs.model';
import LDC from './resouces/coros';
import CC from './resouces/hinos';

export class SongsService {

  private songs: Songs[] = [...LDC, ...CC];

  getSongs() {
    return this.songs;
  }

  getSong(index: number) {
    return (this.songs[index]);
  }

}
