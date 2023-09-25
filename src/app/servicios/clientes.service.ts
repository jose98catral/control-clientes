import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, map } from "rxjs";
import { Cliente } from "src/modelo/cliente.model";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class ClienteServicio{
 clientesColeccion: AngularFirestoreCollection<Cliente>;
 clientesDoc: AngularFirestoreDocument<Cliente>
 clientes : Observable<Cliente[]>
 cliente: Observable<Cliente>


 constructor(private db : AngularFirestore){
     this.clientesColeccion = db.collection('clientes',ref=>ref.orderBy("nombre","asc"))
 }

getClientes(): Observable<Cliente[]>{
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
        map(cambios=>cambios.map( accion =>{
            const datos = accion.payload.doc.data() as Cliente;
            datos.id = accion.payload.doc.id;
            return datos;
        

        }))
    );
    return this.clientes
}
}