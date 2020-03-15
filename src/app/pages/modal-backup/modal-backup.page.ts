import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DataStorageProvider } from 'src/app/providers/data-storage/data-storage';


@Component({
  selector: 'app-modal-backup',
  templateUrl: './modal-backup.page.html',
  styleUrls: ['./modal-backup.page.scss'],
})
export class ModalBackupPage implements OnInit {

  type = null;
  backup = null;
  checked = [];
  modules: string[];

  constructor(
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public dataStorageProvider: DataStorageProvider,
  ) { }

  ngOnInit() {
    this.start();
  }

  private async start() {
    this.type = this.navParams.get('type');
    this.modules = this.navParams.get('modules');
    this.checked = new Array(this.modules.length).fill(true);
  }

  public close() {
    this.modalCtrl.dismiss(false);
  }

  public importBackup() {
    const selection = this.modules.filter((labels, index) => this.checked[index] === true);
    this.modalCtrl.dismiss({selection});
  }

  public isEmpty() {
    return this.checked.every(value => value === false);
  }

}
