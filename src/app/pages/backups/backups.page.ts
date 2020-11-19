import { Component, OnInit } from '@angular/core';

import { BackupService } from 'src/app/providers/backup/backup.service';
import { ModalController, AlertController, ToastController, NavController } from '@ionic/angular';
import { ModalBackupPage } from '../modal-backup/modal-backup.page';
import { DataStorageProvider } from 'src/app/providers/data-storage/data-storage';
import { noBubble } from 'src/app/utils/utils';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-backups',
  templateUrl: './backups.page.html',
  styleUrls: ['./backups.page.scss'],
})
export class BackupsPage implements OnInit {

  backups = [];

  constructor(
    private backupService: BackupService,
    private modalCtrl: ModalController,
    private dataStorageProvider: DataStorageProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private socialSharing: SocialSharing,
  ) { }

  ngOnInit() {
    this.start();
  }

  private async start() {
    this.backups = await this.backupService.getBackups();
  }

  public async selectBackup(backup) {
    this.backupService.restoreLocalBackups(backup).then(async database => {
      this.openImportOptions(database);
    });
  }

  public async chooseBackup() {
    this.backupService.chooseBackupFile().then(async database => {
      if (!!Object.keys(database).length) {
        this.openImportOptions(database);
      } else {
        this.showToast('Falha ao restaurar o backup!', 3000, 'bottom');
      }
    });
  }

  private async restoreBackup(data) {
    data.forEach(collection => {
      this.dataStorageProvider.update(collection.key.toString(), collection.value);
    });
    this.showInfo('Backup restaurado', 'O backup foi restaurado com sucesso!', () => this.navCtrl.pop(), false);
  }

  public async deleteBackup(backup, event) {
    noBubble(event);
    this.showConfirm('Deletar backup', `Tem certexa que deseja deletar o ${backup.name}`, () => {
      this.backupService.deleteLocalBackup(backup).then(({fileRemoved}) => {
        this.backups.splice(this.backups.findIndex(b => b === backup), 1);
        this.showToast(`O ${fileRemoved.name} foi apagado!`, 2000, 'bottom');
      });
    });
  }

  public shareBackup(backup, event) {
    noBubble(event);
    this.socialSharing.share(null, null, backup.nativeURL)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  private filterImport(database, selection) {
    const importData = database.filter(collection => selection.find(option => collection.key === option));
    this.restoreBackup(importData);
  }

  private getKeys(data: [{key: string, value: any}]) {
    return data.map(o => o.key);
  }

  private async openImportOptions(database) {
    const backupList = await this.modalCtrl.create({
      component: ModalBackupPage,
      componentProps: {
        type: 'importar',
        modules: this.getKeys(database)
      },
    });

    backupList.present();

    const { data } = await backupList.onDidDismiss();
    if (data.selection) {
      this.filterImport(database, data.selection);
    }
  }

  private async showConfirm(title: string, msg: string, positive, negative?) {
    const confirm = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Não',
          handler: negative ? negative : null
        },
        {
          text: 'Sim',
          handler: positive
        }
      ]
    });
    confirm.present();
  }

  async showInfo(title: string, msg: string, callback?, backdrop?) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [{
        text: 'Ok',
        handler: callback ? callback : null
      }],
      backdropDismiss: backdrop ? backdrop : true
    });
    await alert.present();
  }

  async showToast(msg, time, position, callback?) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position
    });

    toast.onDidDismiss().then(callback);
    toast.present();
  }

}
