import { Component } from '@angular/core';
import { ViewController, NavParams, IonicPage } from "ionic-angular";

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  
  collection: string[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.collection = this.navParams.get("data");
  }

  close(index:number) {
    this.viewCtrl.dismiss({idx:index});
  }

}
