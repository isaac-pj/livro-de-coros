import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  private defaultBackupFolder = 'backup';
  private defaultPath = '';
  private backups = [];

  private exportableModules = ['Lists', 'Favorits'];

  constructor(
    private platform: Platform,
    private file: File,
    private filePath: FilePath,
    private chooser: Chooser,
  ) {
      this.loadLocalBackups();
      this.setDefaultPath();
  }

  public async getBackups() {
    return this.backups;
  }

  public getExportableModules(): string[] {
    return this.exportableModules;
  }

  public async createLocalBackup(content, name) {
    await this.createBackupFolder();
    return await this.createBackup(content, `${name}.hsn`);
  }

  public async restoreLocalBackups(file) {
    const path = this.getDirectoryPath(file.nativeURL, 1);
    return await this.restoreBackup(file.name, path);
  }

  private async restoreExternalBackup(result) {
    const path = this.getDirectoryPath(await this.filePath.resolveNativePath(result.uri), 1);
    return await this.restoreBackup(result.name, path);
  }

  public async deleteLocalBackup(backup) {
    return await this.removeBackup(backup.name);
  }

  private setDefaultPath() {
    this.platform.ready().then(async () => {
      this.defaultPath = `${this.file.dataDirectory}${this.defaultBackupFolder}/`;
    });
  }

  private async createBackupFolder() {
    this.platform.ready().then(async () => {
      this.file.checkDir(this.file.dataDirectory, this.defaultBackupFolder)
        .catch(error => {
          if (error.code === 1) {
            this.file.createDir(this.file.dataDirectory, this.defaultBackupFolder, false)
            .then(res => console.log(res))
            .catch(err => console.log('CREATE DIR', err));
          }
        });
    });
  }

  private async createBackup(content, name) {
    if (await this.platform.ready()) {
      const blob = new Blob([content], {type: 'application/json;charset=utf-8'});
      const backup = await this.file.writeFile(this.defaultPath, name, blob);
      if (backup) {
        this.backups.push(backup);
        return true;
      } else {
        return false;
      }
    }
  }

  private async removeBackup(backupFileName) {
    if (await this.platform.ready()) {
      return await this.file.removeFile(this.defaultPath, backupFileName);
    }
  }

  private async loadLocalBackups() {
    this.platform.ready().then(async () => {
      this.backups = await this.file.listDir(this.file.dataDirectory, this.defaultBackupFolder);
    });
  }

  private async clearAllBackups() {
    this.platform.ready().then(async () => {
      this.file.removeRecursively(this.file.dataDirectory, this.defaultBackupFolder);
    });
  }

  private async restoreBackup(name, path?) {
    path = path ? path : this.defaultPath;

    if (await this.platform.ready() && await this.file.checkFile(path, name)) {
      try {
        return JSON.parse(await this.file.readAsText(path, name));
      } catch (error) {
        return error;
      }
    }
  }

  public async chooseBackupFile() {
    if (this.platform.ready()) {
      const result = await this.chooser.getFile();
      return await this.restoreExternalBackup(result);
    }
  }

  private getDirectoryPath(path, depth?) {
    if (depth > 0) {
      path = `${path.substring(0, path.lastIndexOf('/'))}`;
      depth--;
      return this.getDirectoryPath(path, depth);
    } else {
      return `${path}/`;
    }
  }

  private resolveFileName(path) {
    return path.substring(1 + path.lastIndexOf('/'), path.length);
  }

}
