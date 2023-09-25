import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { ClienteServicio } from './servicios/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  
  ],
  providers: [ClienteServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
