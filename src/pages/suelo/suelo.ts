import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-suelo',
  templateUrl: 'suelo.html',
})
export class SueloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SueloPage');
  }

  save()
  {
  	 this.navCtrl.setRoot(HomePage);
  }

}
