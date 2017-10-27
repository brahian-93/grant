import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { RegistroPage } from '../pages/registro/registro';
import { HistorialPage } from '../pages/historial/historial';
import { InformacionPage } from '../pages/informacion/informacion';

import { AguaPage } from '../pages/agua/agua';
import { AirePage } from '../pages/aire/aire';
import { SueloPage } from '../pages/suelo/suelo';
import { ForestalPage } from '../pages/forestal/forestal';


export const firebaseConfig = {
   apiKey: "AIzaSyDBK0es4Cvq0np2aKt2RF7V5AiYKGRxgZw",
   authDomain: "gestordb-b8298.firebaseapp.com",
   databaseURL: "https://gestordb-b8298.firebaseio.com",
   projectId: "gestordb-b8298",
   storageBucket: "gestordb-b8298.appspot.com",
   messagingSenderId: "975412912308"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    HistorialPage,
    InformacionPage,
    RegistroPage,
    AguaPage,
    AirePage,
    SueloPage,
    ForestalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    HistorialPage,
    InformacionPage,
    RegistroPage,
    AguaPage,
    AirePage,
    SueloPage,
    ForestalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
