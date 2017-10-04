import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-forestal',
  templateUrl: 'forestal.html',
})
export class ForestalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForestalPage');
  }

  save()
  {
  	 this.navCtrl.setRoot(HomePage);
  }
}
