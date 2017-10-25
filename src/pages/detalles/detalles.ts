import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Firebase } from '@ionic-native/firebase';
import firebase  from 'firebase';

import { Aguadb } from '../../services/aguadb.service';
import { Airedb } from '../../services/airedb.service';


@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

   public listado: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public aguadb: Aguadb,
               private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }


}
