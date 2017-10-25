import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class Forestaldb{
   
   listForestal = [];
   constructor( private afAuth: AngularFireAuth, private afDB: AngularFireDatabase ){}

//CRUD
   public createForestal(forestal){
     this.afAuth.authState.subscribe(auth => { 
         this.afDB.database.ref(`${auth.uid}/Forestal/`+forestal.idForestal).set(forestal) });

     //this.afDB.database.ref('Forestal/'+forestal.idForestal).set(forestal);
   }
   public getListForestal(){  //Muestra la lista de objetos
   	 return this.afDB.list('Forestal/'); 
   }
   public getForestal(idForestal){ //Muestra el objeto asociado a ese id
   	 return this.afDB.object('Forestal/'+idForestal);
   }
   public editForestal(forestal){
   	 this.afDB.database.ref('Forestal/'+forestal.idForestal).set(forestal);
   }
   public deleteForestal(forestal){
   	 this.afDB.database.ref('Forestal/'+forestal.id).remove();
   }

}