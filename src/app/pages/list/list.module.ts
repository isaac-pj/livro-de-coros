import { NgModule } from '@angular/core';
import { ListPage } from './list.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalSelectPageModule } from '../modal-select/modal-select.module';

const routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelectPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListPage,
  ],
})
export class ListPageModule {}
