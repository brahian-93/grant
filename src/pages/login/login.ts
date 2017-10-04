import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public loadingCtrl: LoadingController)
  {}

   presentLoading() {
     let loader = this.loadingCtrl.create({
       content: "Espere...",
       duration: 3000
     });
     loader.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.storage.set("logged", true);
    this.navCtrl.setRoot(HomePage);
  }

}
