import { Component, Input } from '@angular/core';
import { ViewController, NavParams } from "ionic-angular";

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  
  collection: string[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.collection = this.navParams.get("data");
  }

  close(index:number) {
    this.viewCtrl.dismiss({idx:index});
  }

}
