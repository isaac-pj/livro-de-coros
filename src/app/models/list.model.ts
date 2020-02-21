import { Songs } from './songs.model';

export class List {
  constructor(public name: string,
              public date: string,
              public time: string,
              public songs: Array<Songs>,
              public sung: Array<number>,
              public comments?: string) {
  }
}
