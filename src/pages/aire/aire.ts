import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-aire',
  templateUrl: 'aire.html',
})
export class AirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirePage');
  }

  save()
  {
  	 this.navCtrl.setRoot(HomePage);
  }

}
