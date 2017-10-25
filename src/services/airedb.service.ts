import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class Airedb{
   
   listAire = [];
   constructor( private afAuth: AngularFireAuth, private afDB: AngularFireDatabase){}

//CRUD
   public createAire(aire){
     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Aire/`+aire.idAire).set(aire) });
     
     //this.afDB.database.ref('Aire/'+aire.idAire).set(aire);
   }
   public getListAire(){  //Muestra la lista de objetos
   	 return this.afDB.list('Aire/'); 
   }
   public getAire(idAire){ //Muestra el objeto asociado a ese id
   	 return this.afDB.object('Aire/'+idAire);
   }
   public editAire(aire){
   	 this.afDB.database.ref('Aire/'+aire.idAire).set(aire);
   }
   public deleteAire(aire){
   	 this.afDB.database.ref('Aire/'+aire.idAire).remove();
   }
}
