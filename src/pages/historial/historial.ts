import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

   public listAgua: Array<any> = [];
   public listAire: Array<any> = [];
   public listForestal: Array<any> = [];
   public listSuelo: Array<any> = [];

   detail: string;

   public ref;

   @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public toast : ToastController,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
     console.log('ionViewDidLoad HistorialPage');
     this.presentLoading();
     this.Read(1);this.Read(2);this.Read(3);this.Read(4);
  }

  public goToDetalles(detalle,index:number){
    switch (index) {
      case 1:
         this.detail = "ICA: " + detalle.ica;
      break;
      case 2:
         this.detail = "MP10-M.Anual: " + detalle.MP10ma + "<br>" +
                       "MP10-24h: " + detalle.MP10h + "<br>" +
                       "Ozono-8h: " + detalle.ozono + "<br>" +
                       "NO2-M.Anual: " + detalle.NO2ma + "<br>" +
                       "NO2-1h: " + detalle.NO2h + "<br>" +
                       "SO2-24H: " + detalle.SO2;
      break;
      case 3:
         this.detail = "Superficie bosque: " + detalle.pcds + "<br>" +
                       "Superficie ref.: " + detalle.scdb;
      break;
      case 4:
         this.detail = "Color: " + detalle.color + "<br>" +
                       "ph.: " + detalle.ph + "<br>" +
                       "Textura: " + detalle.textura;

      break;
    }
     this.detail = this.detail + "<br>" +
                   "Latitud: " + detalle.lat + "<br>" +
                   "Longitud: " + detalle.long;
     const alert = this.alertCtrl.create({
       title: `<p style="text-align: center;">${detalle.titulo}</p>`,
       subTitle: this.detail,
       buttons: ['OK']
     });
     alert.present();
  }

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
           });
         break;
         case 2:
           this.afDB.database.ref(`${data.uid}/Aire`).orderByKey().on('value', snapshot => {
               this.listAire = [];
               snapshot.forEach( item => {
                   this.listAire.push( item.val() );
                   return false;
               });
           });
         break;
         case 3:
           this.afDB.database.ref(`${data.uid}/Forestal`).orderByKey().on('value', snapshot => {
               this.listForestal = [];
               snapshot.forEach( item => {
                   this.listForestal.push( item.val() );
                   return false;
               });
           });
         break;
         case 4:
           this.afDB.database.ref(`${data.uid}/Suelo`).orderByKey().on('value', snapshot => {
               this.listSuelo = [];
               snapshot.forEach( item => {
                   this.listSuelo.push( item.val() );
                   return false;
               });
           });
         break;
       }
     });
   }

   public delete( listado, index: number){
     this.afAuth.authState.subscribe(data => { 
       switch (index) {
         case 1:
           this.ref = this.afDB.database.ref(`${data.uid}/Agua`);
           this.ref.child(listado.idAgua).remove();
         break;
         case 2:
           this.ref = this.afDB.database.ref(`${data.uid}/Aire`);
           this.ref.child(listado.idAire).remove();
         break;
         case 3:
           this.ref = this.afDB.database.ref(`${data.uid}/Forestal`);
           this.ref.child(listado.idForestal).remove();
         break;
         case 4:
           this.ref = this.afDB.database.ref(`${data.uid}/Suelo`);
           this.ref.child(listado.idSuelo).remove();
         break;
       }
       this.toast.create({
           message: `Elemento borrado`, //Extrae desde consola console.log(data));
           duration: 3000, }).present();
     });
   }

   presentLoading() {
     let loader = this.loadingCtrl.create({
       content: "Espere...",
       duration: 3000
     });
     loader.present();
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

