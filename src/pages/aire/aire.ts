import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-aire',
  templateUrl: 'aire.html',
})
export class AirePage {

   listAire={idAire: null,titulo:null,MP10ma: null, MP10h: null, ozono: null,
             NO2ma: null, NO2h: null, SO2: null,lat: null,long: null};
   lat = null;
   long = null;
   idAire = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public geolocation: Geolocation){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirePage');
  }

  public save()
  {
     this.listAire.idAire = Date.now();
     this.geolocation.getCurrentPosition().then((rest) => { this.listAire.lat = rest.coords.latitude });
     this.geolocation.getCurrentPosition().then((rest) => { this.listAire.long = rest.coords.longitude });

     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Aire/`+this.listAire.idAire).set(this.listAire);} );

     this.toast.create({
         message: `Guardado: ${this.listAire.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
