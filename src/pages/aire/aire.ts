import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

import { Airedb } from '../../services/airedb.service';

@Component({
  selector: 'page-aire',
  templateUrl: 'aire.html',
})
export class AirePage {

   listAire={idAire: null,titulo:null,
             MP10ma: null, MP10h: null, ozono: null,
             NO2ma: null, NO2h: null, SO2: null};
   idAire = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               public airedb: Airedb) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirePage');
  }

  public save()
  {
     this.listAire.idAire = Date.now();
     this.airedb.createAire(this.listAire);
     this.toast.create({
         message: `Guardado: ${this.listAire.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
