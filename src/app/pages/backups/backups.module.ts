import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackupsPage } from './backups.page';
import { ModalBackupPageModule } from '../modal-backup/modal-backup.module';

const routes: Routes = [
  {
    path: '',
    component: BackupsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBackupPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BackupsPage]
})
export class BackupsPageModule {}
