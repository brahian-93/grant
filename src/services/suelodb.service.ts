import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class Suelodb{
   
   listSuelo = [];
   constructor( private afAuth: AngularFireAuth, private afDB: AngularFireDatabase ){}

//CRUD
   public createSuelo(suelo){
     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Suelo/`+suelo.idSuelo).set(suelo) });

     //this.afDB.database.ref('Suelo/'+suelo.idSuelo).set(suelo);
   }
   public getListSuelo(){  //Muestra la lista de objetos
       return this.afDB.list('Suelo/'); 
   }
   public getSuelo(idSuelo){ //Muestra el objeto asociado a ese id
       return this.afDB.object('Suelo/'+idSuelo);
   }
   public editSuelo(suelo){
       this.afDB.database.ref('Suelo/'+suelo.idSuelo).set(suelo);
   }
   public deleteSuelo(suelo){
       this.afDB.database.ref('Suelo/'+suelo.id).remove();
   }

}