import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Listas',
      url: '/lists',
      icon: 'list-box'
    },
    {
      title: 'Favoritos',
      url: '/favorites',
      icon: 'heart'
    },
  ];

  public otherPages = [
    {
      title: 'Configurações',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Contato',
      url: '/contact',
      icon: 'call'
    },
    {
      title: 'Sobre',
      url: '/about',
      icon: 'information-circle'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#008ba3');
      this.splashScreen.hide();
    });
  }
}
