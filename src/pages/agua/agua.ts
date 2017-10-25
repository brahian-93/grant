import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';

import { Aguadb } from '../../services/aguadb.service';

@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})

export class AguaPage {

   listAgua={idAgua: null,titulo:null, ica: null};
   idAgua = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               public aguadb: Aguadb) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AguaPage');
  }

  public save()
  {
     this.listAgua.idAgua = Date.now();
     this.aguadb.createAgua(this.listAgua);
     this.toast.create({
         message: `Guardado: ${this.listAgua.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop();
     //alert('Elemento almacenado'); //Regresa a la vista anterior
  }

}
