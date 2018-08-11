import { SettingsPage } from './../pages/settings/settings';
// import { CifrasPage } from './../pages/cifras/cifras';
// import { SlidesPage } from './../pages/slides/slides';
import { SobrePage } from './../pages/sobre/sobre';
import { ContatoPage } from './../pages/contato/contato';
import { FavoritesPage } from './../pages/favorites/favorites';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListsPage } from './../pages/lists/lists';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage, icon: 'home'},
      { title: 'Listas', component: ListsPage, icon: 'list-box' },
      // { title: 'Slides', component: SlidesPage, icon: 'browsers' },
      // { title: 'Cifras', component: CifrasPage, icon: 'musical-note' },
      // { title: 'Historico', component: HomePage, icon: 'bookmark' },
      { title: 'Favoritos', component: FavoritesPage, icon: 'heart' },
      { title: 'Configurações', component: SettingsPage, icon: 'settings' },
      { title: 'Contato', component: ContatoPage, icon: 'call' },
      // { title: 'Ajuda', component: HomePage, icon: 'help-circle' },
      { title: 'Sobre', component: SobrePage, icon: 'information-circle' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault(); 
      // this.statusBar.styleBlackTranslucent()

      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#008ba3');

      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
