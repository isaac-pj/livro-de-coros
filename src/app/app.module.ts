import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SongsService } from './services/songs/songs.service';

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PopoverPage } from './pages/shared/popover/popover';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    PopoverPage,
  ],
  entryComponents: [
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FilePath,
    Chooser,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
