import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

import { Suelodb } from '../../services/suelodb.service';

@Component({
  selector: 'page-suelo',
  templateUrl: 'suelo.html',
})

export class SueloPage {

   listSuelo={idSuelo: null,titulo:null, color: null, ph: null, textura: null};
   idSuelo = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private toast: ToastController,
               public suelodb: Suelodb){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SueloPage');
  }

  public save()
  {
     this.listSuelo.idSuelo = Date.now();
     this.suelodb.createSuelo(this.listSuelo);
     this.toast.create({
         message: `Guardado: ${this.listSuelo.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
