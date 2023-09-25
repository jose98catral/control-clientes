import { Component } from '@angular/core';
import { ClienteServicio } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/modelo/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
clientes : Cliente [];
  constructor( private clientesServicio : ClienteServicio){

  }
ngOnInit(){
  this.clientesServicio.getClientes().subscribe(
    clientes => this.clientes = clientes
  )
}
getSaldoTotal() {
  let saldoTotal = 0;

  if (this.clientes !== undefined && this.clientes !== null) {
    this.clientes.forEach(cliente => {
   
      if (cliente.saldo !== undefined && cliente.saldo !== null) {
        saldoTotal += cliente.saldo;
      }
    });
  }

  return saldoTotal;
}
}
