import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google:any;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private geolocation: Geolocation) {}

   @ViewChild('map') mapRef: ElementRef;

   ionViewDidLoad() {
     console.log('ionViewDidLoad MapaPage');
     this.obtenerPosicion();
   }

   obtenerPosicion()
   {
     this.geolocation.getCurrentPosition().then(response => {
         this.loadMap(response);
       }).catch(error =>{ console.log(error); })
   }

   loadMap( position: Geoposition )
   {
     let latitude = position.coords.latitude;
     let longitud = position.coords.longitude;

     const location = new google.maps.LatLng(latitude,longitud);
    
     const options = { 
     	 center: location,
     	 zoom: 15,
     	 streetViewControl: false,
     	 mapTypeId: 'roadmap' //satellite, hibrid, terrain
     };

     const map = new google.maps.Map(this.mapRef.nativeElement,options);
     this.addMarker(location,map);
   
     //setTimeout( () => { 
   	 //  map.setMapTypeId('satellite');
   	 //},3000);

   }

   addMarker(position, map){
   	 return new google.maps.Marker({position,map});
   }

}
