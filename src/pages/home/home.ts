import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { AguaPage } from '../agua/agua';
import { AirePage } from '../aire/aire';
import { SueloPage } from '../suelo/suelo';
import { ForestalPage } from '../forestal/forestal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = AguaPage;

  constructor(public navCtrl: NavController, public storage:Storage) { }

  setContent(index : number)
  {
    switch(index){
      case 1:{
        this.navCtrl.setRoot(AguaPage);
        break;
      }
      case 2:{
        this.navCtrl.setRoot(AirePage);
        break;
      }
      case 3:{
        this.navCtrl.setRoot(SueloPage);
        break;
      }
      case 4:{
        this.navCtrl.setRoot(ForestalPage);
        break;
      }
    }
  }


   menuOpc: Menu[] = [
     { label: 'Noticias', icon: 'md-paper' },
   ];



  logout() {
     this.storage.set("logged", false);
     this.navCtrl.setRoot(LoginPage);    
  }

}

interface Menu {
   label: string;
   icon: string;
}
