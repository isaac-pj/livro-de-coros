import { Component } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

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
export class PopoverPage {

  collection: string[];

  constructor(public popoverCtrl: PopoverController, public navParams: NavParams) {
    this.collection = this.navParams.get('data');
    console.log(this.collection);
  }

  close(index: number) {
    this.popoverCtrl.dismiss({index});
  }

}
