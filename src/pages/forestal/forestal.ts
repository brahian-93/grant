import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-forestal',
  templateUrl: 'forestal.html',
})

export class ForestalPage {

   listForestal={idForestal: null,titulo:null, pcds: null, scdb: null,lat: null,long: null};
   lat = null;
   long = null;
   idForestal = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, private geolocation: Geolocation) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForestalPage');
  }

  public save()
  {
     this.listForestal.idForestal = Date.now();
     this.geolocation.getCurrentPosition().then((rest) =>{
         this.listForestal.lat = rest.coords.latitude;
         this.listForestal.long = rest.coords.longitude;
         this.afAuth.authState.subscribe(auth => { 
           this.afDB.database.ref(`${auth.uid}/Forestal/`+this.listForestal.idForestal).set(this.listForestal); });
     });

     this.toast.create({
         message: `Guardado: ${this.listForestal.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
