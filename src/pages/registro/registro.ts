import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AguaPage } from '../agua/agua';
import { AirePage } from '../aire/aire';
import { SueloPage } from '../suelo/suelo';
import { ForestalPage } from '../forestal/forestal';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

   cartas = [
	   {
	   	 titulo:"Indice forestal",
	   	 imagen: "../assets/img/forestal.jpg",
	   },
	   {
	   	 titulo:"Analisis terreno",
	   	 imagen: "../assets/img/suelo.jpg",
	   },
	   {
	   	 titulo:"Calidad de aire",
	   	 imagen: "../assets/img/aire.jpg",
	   },
	   {
	   	 titulo:"Indice de agua",
	   	 imagen: "../assets/img/agua.jpg",
	   },
	 ];

	 setContent(i: number){
	 	 switch (i) {
	 	 	 case 1:
	 	 	    this.navCtrl.push(ForestalPage);
	 	 	 break;
	 	 	 case 2:
	    	   	 this.navCtrl.push(SueloPage);
	 	 	 break;
	 	 	 case 3:
    	   	 	 this.navCtrl.push(AirePage);
	 	 	 break;
	 	 	 case 4:
    	 	 	 this.navCtrl.push(AguaPage);
	 	 	 break;
	 	 }
	 }
}
