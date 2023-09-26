import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLoggedIn : boolean;
loggedInUser: string;

constructor(private loginService: LoginService,
  private router : Router){
 
}
ngOnInit(){
  this.loginService.getAuth().subscribe( auth =>{
    if(auth){
      this.isLoggedIn = true;
      this.loggedInUser = auth.email || "";
    }
    else {
      this.isLoggedIn = false;
    }
  })
}
logout(){
  this.loginService.logout();
  this.isLoggedIn= false;
  this.router.navigate(['/login']);
}
}
