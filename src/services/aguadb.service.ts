import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Firebase } from '@ionic-native/firebase';

@Injectable()

export class Aguadb{
   
   constructor( private afAuth: AngularFireAuth, private afDB: AngularFireDatabase){}

//CRUD
   public createAgua(agua){
     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Agua/`+agua.idAgua).set(agua); console.log(`${auth.uid}/Agua/`)} );

     //this.afDB.database.ref('Agua/'+agua.idAgua).set(agua);
   }

   public editAgua(agua){
   	 this.afDB.database.ref('Agua/'+agua.idAgua).set(agua);
   }
   public deleteAgua(agua){
   	 this.afDB.database.ref('Agua/'+agua.idAgua).remove();
   }

}



//   public getAgua(idAgua){ //Muestra el objeto asociado a ese id
//      return this.afDB.object('Agua/'+idAgua);
//   }