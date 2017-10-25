import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

   user = {} as User;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
  	           public loadingCtrl: LoadingController, private toast: ToastController){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   presentLoading() {
     let loader = this.loadingCtrl.create({
       content: "Espere...",
       duration: 2000
     });
     loader.present();
   }

   async registro(user: User){
   	try{
       const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
       if(result)
       {
         this.toast.create({
           message: 'Usuario registrado', //Extrae desde consola console.log(data));
           duration: 3000
           }).present();
         this.navCtrl.pop();
       }
     }
     catch (e){
     	 console.error(e);
     	 this.toast.create({
           message: 'Error registrando usuario', //Extrae desde consola console.log(data));
           duration: 3000
           }).present();
       this.navCtrl.pop();
     }
   }

}

interface User{
	 email: string;
	 password: string;
}
