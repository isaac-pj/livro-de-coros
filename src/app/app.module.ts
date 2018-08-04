import { SlidesPage } from './../pages/slides/slides';
import { CifrasPage } from './../pages/cifras/cifras';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListsPage } from './../pages/lists/lists';
import { RightNavPage } from './../pages/right-nav/right-nav';
import { SelectPage } from './../pages/select/select';
import { ContatoPage } from './../pages/contato/contato';
import { SobrePage } from './../pages/sobre/sobre';
import { FavoritesPage } from './../pages/favorites/favorites';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SongsService } from './../services/songs.service';
import { ListsDaoProvider } from '../providers/general-dao/lists-dao';
import { SongsDaoProvider } from '../providers/songs-dao/songs-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListsPage,
    RightNavPage,
    SelectPage,
    FavoritesPage,
    SobrePage,
    ContatoPage,
    CifrasPage,
    SlidesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListsPage,
    RightNavPage,
    SelectPage,
    FavoritesPage,
    SobrePage,
    ContatoPage,
    CifrasPage,
    SlidesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SongsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListsDaoProvider,
    SongsDaoProvider,
    DatePipe,
  ]
})
export class AppModule {

}
