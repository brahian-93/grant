import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

import { Forestaldb } from '../../services/forestaldb.service';

@Component({
  selector: 'page-forestal',
  templateUrl: 'forestal.html',
})

export class ForestalPage {

   listForestal={idForestal: null,titulo:null, pcds: null, scdb: null};
   idForestal = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
               public forestaldb: Forestaldb) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForestalPage');
  }

  public save()
  {
     this.listForestal.idForestal = Date.now();
     this.forestaldb.createForestal(this.listForestal);
     this.toast.create({
         message: `Guardado: ${this.listForestal.titulo}`, //Extrae desde consola console.log(data));
         duration: 3000, }).present(); 
     this.navCtrl.pop(); //Regresa a la vista anterior
     //alert('Elemento almacenado');
  }

}
