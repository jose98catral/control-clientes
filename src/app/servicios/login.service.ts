import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs";


@Injectable()
export class LoginService{
    constructor(private authService: AngularFireAuth){

    }

    login(email:string, contraseña: string){
        return new Promise((resolve,reject)=>{
            this.authService.signInWithEmailAndPassword(email,contraseña)
            .then(datos => resolve(datos),
            error => reject(error))
        })
    }
    getAuth(){
        return this.authService.authState.pipe(
            map(auth => auth)
        )
    }
    logout(){
        this.authService.signOut();
    }
}