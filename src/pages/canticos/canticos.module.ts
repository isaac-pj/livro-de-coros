import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanticosPage } from './canticos';

@NgModule({
  declarations: [
    CanticosPage,
  ],
  imports: [
    IonicPageModule.forChild(CanticosPage),
  ],
})
export class CanticosPageModule {}
