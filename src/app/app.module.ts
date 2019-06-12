import { PopoverPage } from './../pages/popover/popover';
import { SettingsPage } from './../pages/settings/settings';
import { RandomPage } from './../pages/random/random';
import { SlidesPage } from './../pages/slides/slides';
import { CifrasPage } from './../pages/cifras/cifras';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
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

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DataStorageProvider } from '../providers/data-storage/data-storage';
import { SetupProvider } from '../providers/setup/setup';
registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //para gerar um build de production comente os modulos abaixo
    ListPage,
    ListsPage,
    RightNavPage,
    SelectPage,
    FavoritesPage,
    SobrePage,
    ContatoPage,
    CifrasPage,
    SlidesPage,
    PopoverPage,
    RandomPage,
    SettingsPage, 
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
    PopoverPage,
    RandomPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SongsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListsDaoProvider,
    SongsDaoProvider,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    DataStorageProvider,
    SetupProvider
  ]
})
export class AppModule {

}
