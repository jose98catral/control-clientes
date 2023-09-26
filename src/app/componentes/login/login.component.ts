import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string;
contrasena:string;


constructor(private router: Router,
  private loginService : LoginService,
  private snackBar: MatSnackBar){

}
ngOnInit(){
  this.loginService.getAuth().subscribe(auth =>{
    if(auth){
      this.router.navigate(['/'])
    }
  })
}
login(){
  this.loginService.login(this.email, this.contrasena).
  then(resolve => {this.router.navigate(['/']);
})
.catch(error => {
  this.snackBar.open("Datos Incorrectos","cerrar" ,{duration:4000});
}
)
}
}
