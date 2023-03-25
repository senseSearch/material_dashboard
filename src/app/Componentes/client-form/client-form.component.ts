import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent{

  tieneContador = false;
  agregarContador = false;

  addressForm = this.fb.group({
    nombres: [null, Validators.required],
    apellidos: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    telefono: [null, Validators.required],
    tipoEmpresa: ['free', Validators.required]
  });

  states = [
    {name: 'La Paz', abbreviation: 'LP'},
    {name: 'Cochabamba', abbreviation: 'CBBA'},
    {name: 'Santa Cruz', abbreviation: 'STA CRUZ'},
    {name: 'Tarija', abbreviation: 'TAR'},
    {name: 'Pando', abbreviation: 'PN'},
    {name: 'Oruro', abbreviation: 'OR'},
    {name: 'Beni', abbreviation: 'BN'},
    {name: 'Potosi', abbreviation: 'PT'},
    {name: 'Sucre', abbreviation: 'SC'}
  ];

  constructor(private fb: FormBuilder) {}
  
  onSubmit(): void {
    alert('Thanks!');
  }
  
}
