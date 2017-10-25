import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

	 plantillas = [
	   {
	   	 titulo: "¿Qué es GRANT?",
	   	 descripcion: "<b>GRANT</b> es una aplicación que, mediante una serie de parametros ambientales, se pueden obtener "+
	   	              "caracteristicas básicas e indicadores con el fin de preservar los recursos ofrecidos por la aplicación. "+
	   	              "Estos recursos son:",
	   	 imagen: "../assets/img/menu1.jpg",
	   },
	   {
	   	 titulo: "Indice forestal",
	   	 descripcion: "Se obtiene el porcentaje correspondiente a la porción de superficie cubierta por un bosque "+
	   	               "conociendo la superficie detectada y la superficie sin reconocer o de referencia",
	   	 imagen: "../assets/icon/planta.ico",
	   },
	   {
	   	 titulo: "Terreno",
	   	 descripcion: "Se presentan los indicadores con el fin de determinar las condiciones en las que se encuentra el suelo "+
	   	               "para que pueda preservarse y funcionar en el ecosistema.",
	   	 imagen: "../assets/icon/suelo.ico",
	   },
	   {
	   	 titulo: "Calidad del aire",
	   	 descripcion: "Basado en la documentación proporcionada por la <b>OMS</b>, se presentan parametros como material "+
	   	               "particulado, ozono, dioxido de nitrogeno y dioxiodo de azufre, suspendido en el aire, "+
	   	               "con el fin de determinar ciertas condiciones a los que se expone una población en cierta región.",
	   	 imagen: "../assets/icon/viento.ico",
	   },
	   {
	   	 titulo: "Indice de calidad del agua",
	   	 descripcion: "Mediante el <b>ICA</b> y su coloración, se puede determinar en cual de las cinco (5) categorias se encuentra "+
	   	               "el liquido, y en que recomendaciones se hacen al respecto.",
	   	 imagen: "../assets/icon/agua.ico",
	   },
	   {
	   	 titulo: "",
	   	 descripcion: "Cada uno de los anteriores variables se encuentran disposibles en el <b>Ministerio de Ambiente y desarrollo "+
	   	               "sostenible </b> y el Instituto de Hidrología y Meteorología y Estudios Ambientales <b>(IDEAM)</b>",
	   	 imagen: "../assets/icon/like.png",
	   },
	 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

}
