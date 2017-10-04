import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AguaPage } from '../pages/agua/agua';
import { AirePage } from '../pages/aire/aire';
import { SueloPage } from '../pages/suelo/suelo';
import { ForestalPage } from '../pages/forestal/forestal';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AguaPage,
    AirePage,
    SueloPage,
    ForestalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AguaPage,
    AirePage,
    SueloPage,
    ForestalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
