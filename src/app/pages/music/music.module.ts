import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MusicPage } from './music.page';
import { PopoverPage } from '../shared/popover/popover';

const routes: Routes = [
  {
    path: '',
    component: MusicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MusicPage],
  entryComponents: [],
})
export class MusicPageModule {}
