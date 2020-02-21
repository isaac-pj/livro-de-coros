import { NgModule } from '@angular/core';
import { SelectPage } from './select.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalMusicPageModule } from '../modal-music/modal-music.module';
import { RandomPageModule } from '../modal-random/random.module';

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
    ComponentsModule,
    ModalMusicPageModule,
    RandomPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelectPage,
  ],
})
export class SelectPageModule {}
