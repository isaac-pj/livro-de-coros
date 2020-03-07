import { Component, OnInit } from '@angular/core';
import { DataStorageProvider } from './../../providers/data-storage/data-storage';
import { NavController, AlertController, ToastController, ModalController } from '@ionic/angular';
import { BackupService } from 'src/app/providers/backup/backup.service';
import { DatePipe } from '@angular/common';
import { ModalBackupPage } from '../modal-backup/modal-backup.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  providers: [DatePipe]
})
export class SettingsPage implements OnInit {

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataStorageProvider: DataStorageProvider,
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
    private backupService: BackupService,
  ) { }

  ngOnInit() {

  }

  public reset() {
    this.showConfirm('Deseja apagar tudo?',
      'Todos os dados serão apagados incluindo as listas criadas e os favoritos');
  }

  public navigateTo(path) {
    this.navCtrl.navigateForward(path);
  }

  public async export() {
    const modules = this.backupService.getExportableModules();
    // const database = await this.dataStorageProvider
    // .getCollections(this.backupService.getExportableModules());
    this.openExportOptions(modules);
  }

  private async openExportOptions(modules) {
    const backupList = await this.modalCtrl.create({
      component: ModalBackupPage,
      componentProps: {
        type: 'exportar',
        modules,
      },
    });

    backupList.present();
    const { data } = await backupList.onDidDismiss();
    if (data.selection) {
      const database = await this.dataStorageProvider
      .getCollections(data.selection);

      this.showCreateBackupAlert((name) => {
        if (name && name !== '') {
          this.backupService.createLocalBackup(JSON.stringify(database), name).then(res => {
            const msg = res ? 'Backup criado com sucesso!' : 'Erro ao criar o backup!';
            this.showToast(msg, 3000, 'bottom');
          });
        }
      });
    }
  }

  public async import() {
    this.navigateTo('/backups');
  }

  private clear() {
    this.dataStorageProvider.clear();
  }

  async showConfirm(title: string, msg: string) {
    const confirm = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Não',
          handler: (negative) => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: (positive) => {
            console.log('Agree clicked');
            this.clear();
            this.showToast('Todos os dados foram apagados!', 3000, 'bottom', () => {
              this.navCtrl.navigateRoot('/home');
              // window.location.reload();
              // window.location.href = 'index.html';
            });
          }
        }
      ]
    });
    confirm.present();
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

  private async showCreateBackupAlert(positive?, negative?) {
    const defaultName = `backup(${this.datePipe.transform(new Date(), 'd.M.y.h.mm.ss')})`;

    const alert = await this.alertCtrl.create({
      header: 'Como devo chamar?',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name-id',
          value: defaultName,
          placeholder: 'Informe um nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'dark',
          handler: () => { }
        }, {
          text: 'Salvar',
          cssClass: 'secondary',
          handler: ({ name }) => positive(name)
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

}
