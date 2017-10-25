import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Firebase } from '@ionic-native/firebase';
import firebase  from 'firebase';

import { Storage } from '@ionic/storage';

import { Aguadb } from '../../services/aguadb.service';
import { Airedb } from '../../services/airedb.service';
import { Forestaldb } from '../../services/forestaldb.service';
import { Suelodb } from '../../services/suelodb.service';

//import { DetallesPage } from '../detalles/detalles';

import { AguaPage } from '../agua/agua';
import { AirePage } from '../aire/aire';
import { SueloPage } from '../suelo/suelo';
import { ForestalPage } from '../forestal/forestal';


@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

   public listAgua: Array<any> = [];
   public listAire: Array<any> = [];
   public listForestal: Array<any> = [];
   public listSuelo: Array<any> = [];

   @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private afAuth: AngularFireAuth, private afDB: AngularFireDatabase,
              public aguadb: Aguadb) {
  }

  ionViewDidLoad() {
     console.log('ionViewDidLoad HistorialPage');
     this.Read(1);this.Read(2);this.Read(3);this.Read(4);
  }
/*
  public goToDetallesAgua(idAgua){
    this.navCtrl.push(DetallesPage,{idAgua});
  }
  public goToDetallesAire(idAire){
    this.navCtrl.push(DetallesPage,{idAire});
  }
  public goToDetallesForestal(idForestal){
    this.navCtrl.push(DetallesPage,{idForestal});
  }
  public goToDetallesSuelo(idSuelo){
    this.navCtrl.push(DetallesPage,{idSuelo});
  } */

   public Read(index: number){
     this.afAuth.authState.subscribe(data => { 
       switch (index) {
         case 1:
           this.afDB.database.ref(`${data.uid}/Agua`).orderByKey().on('value', snapshot => {
               this.listAgua = [];
               snapshot.forEach( item => {
                   this.listAgua.push( item.val() );
                   return false;
               });
               console.log(this.listAgua);
           });
         break;
         case 2:
           this.afDB.database.ref(`${data.uid}/Aire`).orderByKey().on('value', snapshot => {
               this.listAire = [];
               snapshot.forEach( item => {
                   this.listAire.push( item.val() );
                   return false;
               });
               console.log(this.listAire);
           });
         break;
         case 3:
           this.afDB.database.ref(`${data.uid}/Forestal`).orderByKey().on('value', snapshot => {
               this.listForestal = [];
               snapshot.forEach( item => {
                   this.listForestal.push( item.val() );
                   return false;
               });
               console.log(this.listForestal);
           });
         break;
         case 4:
           this.afDB.database.ref(`${data.uid}/Suelo`).orderByKey().on('value', snapshot => {
               this.listSuelo = [];
               snapshot.forEach( item => {
                   this.listSuelo.push( item.val() );
                   return false;
               });
               console.log(this.listSuelo);
           });
         break;
       }
     });
   }
}

/*
           function(snapshot) {
             console.log(snapshot.val().titulo);
             this.listAgua = snapshot.val();
           }
*/
     //aguadb.readAgua().valueChanges().subscribe( lista => { this.listAgua = lista } );
     //airedb.getListAire().valueChanges().subscribe( lista => { this.listAire = lista } );
     //forestaldb.getListForestal().valueChanges().subscribe( lista => { this.listForestal = lista } );
     //suelodb.getListSuelo().valueChanges().subscribe( lista => { this.listSuelo = lista } )

