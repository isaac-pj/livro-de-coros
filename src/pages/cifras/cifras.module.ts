import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CifrasPage } from './cifras';

@NgModule({
  declarations: [
    CifrasPage,
  ],
  imports: [
    IonicPageModule.forChild(CifrasPage),
  ],
})
export class CifrasPageModule {}
