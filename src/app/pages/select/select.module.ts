import { NgModule } from '@angular/core';
import { SelectPage } from './select.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalMusicPage } from '../modal-music/modal-music.page';
import { RandomPage } from '../random/random.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelectPage,
    ModalMusicPage,
    RandomPage
  ],
  entryComponents: [
    ModalMusicPage,
    RandomPage
  ],
})
export class SelectPageModule {}
