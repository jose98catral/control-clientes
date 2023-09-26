import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup ,NgForm,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteServicio } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/modelo/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
clientes : Cliente [];
cliente : Cliente= {
  nombre: "",
  apellido: "",
  email :"",
  saldo : 0
}

@ViewChild("botonCerrar") botonCerrar : ElementRef
clientesForm: FormGroup;
@ViewChild("clienteForm") clienteForm : NgForm


  constructor( private clientesServicio : ClienteServicio,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder){
      this.clientesForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellido: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        saldo: ['', Validators.required]
      });

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
agregar(value : Cliente){
  if(this.clientesForm.dirty && !this.clientesForm.valid){
  console.log(this.clientesForm.valid);
  this.snackBar.open("Por favor llena el formulario correctamente","cerrar" ,{duration:4000})

  }
else{
  this.clientesServicio.agregarCliente(value);
  this.clienteForm.resetForm();
  this.cerrarModal()
}
}
private cerrarModal(){
  this.botonCerrar.nativeElement.click();
}
}
