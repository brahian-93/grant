import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-suelo',
  templateUrl: 'suelo.html',
})

export class SueloPage {

   listSuelo={idSuelo: null,titulo:null, color: null, ph: null, textura: null,lat: null,long: null};
   lat = null;
   long = null;
   idSuelo = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public geolocation: Geolocation){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SueloPage');
  }

  public save()
  {
     this.listSuelo.idSuelo = Date.now();
     this.geolocation.getCurrentPosition().then((rest) => { this.listSuelo.lat = rest.coords.latitude });
     this.geolocation.getCurrentPosition().then((rest) => { this.listSuelo.long = rest.coords.longitude });
     
     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Suelo/`+this.listSuelo.idSuelo).set(this.listSuelo);} );

     this.toast.create({
         message: `Guardado: ${this.listSuelo.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
