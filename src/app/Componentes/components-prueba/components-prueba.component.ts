// import { Component, OnInit } from '@angular/core';
// import { Categories } from 'src/app/model/stockProducts/modeladoPrueba/Categories.model';

// @Component({
//   selector: 'app-components-prueba',
//   templateUrl: './components-prueba.component.html',
//   styleUrls: ['./components-prueba.component.css']
// })
// export class ComponentsPruebaComponent implements OnInit {

//   public txtValue: string = "";

//   public proCategories?: Categories;
  
//   constructor() { }

//   ngOnInit(): void {
//     this.txtValue = "do you want create a new prod category? Y/N\n";
//   }

//   onSubmit(){
    
//     if(this.readLine(this.txtValue) == "y"){
//       this.txtValue += 'input category name:\n';
//       let catName = this.readLine(this.txtValue);
//       console.log('answer : ' + catName);
//       this.proCategories = new Categories(catName);
//     }
//   }

//   readLine(input : string) : string{
//     //extraemos lineas del textArea
//     let txtLines = input.trim().split('\n');

//     //verificamos la respuesta de ultima linea no vacia
//     console.log('answer ' + txtLines[txtLines.length-1]);
//     let answer : string = txtLines[txtLines.length-1];
//     return answer;
//   }

// }
