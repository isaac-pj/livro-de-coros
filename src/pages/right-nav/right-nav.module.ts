import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RightNavPage } from './right-nav';

@NgModule({
  declarations: [
    RightNavPage,
  ],
  imports: [
    IonicPageModule.forChild(RightNavPage),
  ],
})
export class RightNavPageModule {}
