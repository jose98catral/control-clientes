import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServicio } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/modelo/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  clientes : Cliente [];
cliente : Cliente= {
  nombre: "",
  apellido: "",
  email :"",
  saldo : 0
}

@ViewChild("clienteForm") clienteForm : NgForm
clientesForm: FormGroup;
id : string;
constructor( private clientesServicio : ClienteServicio,
  private snackBar: MatSnackBar,
  private formBuilder: FormBuilder,
  private router : Router,
  private route: ActivatedRoute){
    this.clientesForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      saldo: ['', Validators.required]
    });

  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe(cliente => {
      if (cliente) {
        // Rellenar el formulario con los valores del cliente existente
        this.clientesForm.patchValue({
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          email: cliente.email,
          saldo: cliente.saldo
        });
      
        this.cliente = cliente;
      } else {
      
        console.log('Cliente no encontrado');
      }
    });
}
guardar(value : Cliente){
  if(this.clientesForm.dirty && !this.clientesForm.valid){
    console.log(this.clientesForm.valid);
    this.snackBar.open("Por favor llena el formulario correctamente","cerrar" ,{duration:4000})
  
    }
  else{
 value.id= this.id;
 this.clientesServicio.modificarCliente(value);
 this.router.navigate(['/']);
}


}
eliminar(){
if(confirm('Seguro que desea eliminar el cliente?')){
  this.clientesServicio.eliminarCliente(this.cliente);
  this.router.navigate(['/']);
}
}
}