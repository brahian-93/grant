import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})

export class AguaPage {

   listAgua={idAgua: null,titulo:null, ica: null,lat:null,long:null};
   lat = null;
   long = null;
   idAgua = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, private geolocation: Geolocation){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AguaPage');
  }

  public save()
  {
     this.listAgua.idAgua = Date.now();
     this.geolocation.getCurrentPosition().then((rest) => { 
         this.listAgua.lat = rest.coords.latitude;
         this.listAgua.long = rest.coords.longitude;
         this.afAuth.authState.subscribe(auth => { 
           this.afDB.database.ref(`${auth.uid}/Agua/`+this.listAgua.idAgua).set(this.listAgua);} );
     });

     this.toast.create({
         message: `Guardado: ${this.listAgua.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop();
     //alert('Elemento almacenado'); //Regresa a la vista anterior
  }

}
