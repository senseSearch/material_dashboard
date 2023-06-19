import { Component, OnInit } from '@angular/core';
import { Talonario } from '../../model/stockProducts/Properties.interface';
import { ProductService } from 'src/app/services/product.service';

/* 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  productos: Talonario[] = [];
  productList: any[] = [];
  time: string = '';
  clickedRow?: any;

  displayedColumns: string[] = [
    'position',
    'price',
    'product',
    'color',
    'size',
    'grammage',
  ];

  clicked(row: any) {
    this.clickedRow = row;
  }

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    /* this.prodService.getProducts().subscribe((datas: Talonario[]) => {
      //this.productos = datas;
      console.log('------- Products -------', this.productos);
      que te puedo decir con una de las cosas mas importantes de la actualidad
      hoy estuvo nose porque me sentia algo liviano
      semi relajado, asi es como me senti....
    }); */

    /*
      const tableName = 'size';
      this.prodService.getByID(103, tableName).subscribe((res: any) => {
        console.log('response by id: ', res);
      });
    */

    this.prodService.getProductList().subscribe((res: any) => {
      this.productList = res;
      console.log('v4 response : ', res);
    });

    /* this.prodService.currenTime.subscribe((res) => {
      this.time = res;
    }); */
  }
}
