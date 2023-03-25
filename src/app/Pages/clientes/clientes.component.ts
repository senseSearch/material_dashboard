import { Component, OnInit } from '@angular/core';
import { clienteInterface, ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes!: clienteInterface[];

  constructor(private cliService: ClientesService) { }

  ngOnInit(): void {
    this.cliService.loadClientes().subscribe((data : clienteInterface[]) => {
      this.clientes = data;
      console.log('------- clientes --------', data);
    });
  }
}
