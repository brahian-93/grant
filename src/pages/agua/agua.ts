import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})
export class AguaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AguaPage');
  }

  save()
  {
  	 this.navCtrl.setRoot(HomePage);
  }

}
