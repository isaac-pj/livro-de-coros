import { Songs } from './songs.model';

export class Lists{
  constructor(public name:string,
              public date:string,
              public time:string,
              public comments:string,
              public songs:Array<Songs>){
  }
}
