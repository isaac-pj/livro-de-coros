import { NgModule } from '@angular/core';
import { ModalSelectPage } from './modal-select.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalMusicPageModule } from '../modal-music/modal-music.module';

const routes: Routes = [
  {
    path: 'songs',
    component: ModalSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalMusicPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ModalSelectPage,
  ],
})
export class ModalSelectPageModule {}
