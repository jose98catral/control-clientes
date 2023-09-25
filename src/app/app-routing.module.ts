import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HeaderComponent } from './componentes/header/header.component';

const routes: Routes = [
  {path: "", component : TableroComponent},
  {path: "login", component : LoginComponent},
  {path: "cliente/editar/:id", component : EditarClienteComponent},
  {path: "registrarse", component : RegistroComponent},
  {path: "configuracion", component : ConfiguracionComponent},
  {path: "", component : HeaderComponent},
  {path: "**", component : NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
