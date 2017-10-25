import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

//import firebase from '@ionic-native/firebase';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, 
               public storage: Storage, public loadingCtrl: LoadingController, private toast: ToastController){}

   user = {} as User;

   presentLoading() {
     let loader = this.loadingCtrl.create({
       content: "Espere...",
       duration: 2000
     });
     loader.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   async login(user: User) {
     try{
       const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
       if (result){
         this.storage.set("logged", true);
         this.navCtrl.setRoot(HomePage);
         console.log(result);
       }
       else{
         this.toast.create({
           message: 'Correo o password invalidos', //Extrae desde consola console.log(data));
           duration: 3000
           }).present();
         this.navCtrl.pop();
       }
     }
     catch (e){
       console.error(e);
       this.navCtrl.pop();
       this.toast.create({
         message: 'Error de ingreso', //Extrae desde consola console.log(data));
         duration: 3000
         }).present();
     }
  }

  registro(){
     //const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
     //personRef.set({firstName,lastName });
     this.navCtrl.push(RegisterPage);
  }

}

interface User{
   email: string;
   password: string;
}
