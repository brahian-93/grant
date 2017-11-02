import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { HistorialPage } from '../historial/historial';
import { InformacionPage } from '../informacion/informacion';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  root: any = InformacionPage;
  usuario: string;

  constructor(public navCtrl: NavController, public storage:Storage, private toast: ToastController,
               private afAuth: AngularFireAuth) { }

  ionViewWillLoad() {
     console.log('ionViewDidLoad HomePage');
     this.afAuth.authState.take(1).subscribe(data => { 
       if( data && data.email && data.uid) {
           this.toast.create({
               message: `Bienvenido ${data.email}`, //Extrae desde consola console.log(data));
               duration: 3000, }).present();
           this.usuario = `${data.email}`;
       }
     });
   }
 
  setContent(index : number)
  {
     switch(index){
       case 1:{
         this.root = RegistroPage;
         break;
       }
       case 2:{
         this.root = HistorialPage;
         break;
       }
       case 3:{
         this.root = InformacionPage;
         break;
       }
       case 4:{
         this.navCtrl.push(MapaPage);
         break;
       }
     }
  }

  logout() {
     this.storage.set("logged", false);
     this.navCtrl.setRoot(LoginPage);
     this.toast.create({
         message: 'Gracias !!!', //Extrae desde consola console.log(data));
         duration: 3000
         }).present(); 
   }
}