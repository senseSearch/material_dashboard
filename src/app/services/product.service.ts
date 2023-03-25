import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, zipWith } from 'rxjs/operators';
//import { Product } from '../model/stockProducts/Talonario.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //private apiURL = 'http://localhost:3000/productStock';
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  /* 
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiURL + '/product');
    } */

  //`` ´´
  "product_properties": [
    { "price": 60, "product_id": 1, "size_id": 102, "color_id": 101, "grammage_id": 101 },
    { "price": 70, "product_id": 1, "size_id": 101, "color_id": 101, "grammage_id": 101 },
    { "price": 90, "product_id": 3, "size_id": 104, "color_id": 102, "grammage_id": 101 },
    { "price": 250, "product_id": 5, "size_id": 107, "color_id": 104, "grammage_id": 106 }
  ]


  getByID(id: number, from: string) {
    return this.http.get(`${this.apiURL}/${from}/?${from}_id=${id}`).pipe(
      map(([arr]: any) => arr)      //destructuring, enviando solo el objecto y no el array
    );
  }

  //solicitar para un id de un pedido de la tabla de pedidos (trabajarlo individualmente)

  getProductList() {
    let counter = 0;
    return this.http.get(`${this.apiURL}/product_properties`).pipe(
      mergeMap((arr: any) =>
        forkJoin(
          arr.map((obj: any) => {
            return forkJoin([
              this.getByID(obj.product_id, 'product'),
              this.getByID(obj.size_id, 'size'),
              this.getByID(obj.color_id, 'color'),
              this.getByID(obj.grammage_id, 'grammage'),
            ]).pipe(
              map(([product, size, color, grammage]: any) => ({
                counter: ++counter,
                price: `${obj.price} Bs.`,
                product: product.product_name,
                color: color.value,
                size: size.value,
                grammage: `${grammage.value} g`,
              }))
            );
          })
        )
      )
    );
  }

  getAllProducts_v4() {
    return this.http.get(`${this.apiURL}/product_properties`).pipe(
      mergeMap((arr: any) =>
        forkJoin(
          arr.map((obj: any) =>
            forkJoin([
              this.getByID(obj.product_id, 'product'),
              this.getByID(obj.size_id, 'size'),
              this.getByID(obj.color_id, 'color'),
              this.getByID(obj.grammage_id, 'grammage'),
            ]).pipe(
              map((inObj: any) => ({
                price: obj.price,
                ...inObj,
              }))
            )
          )
        )
      )
    );
  }

  getAllProducts_v3() {
    let index = 0;
    return this.http.get(`${this.apiURL}/product_properties`).pipe(
      mergeMap((arr: any) =>
        arr.map((obj: any) => {
          const obsList = forkJoin([
            this.getByID(obj.product_id, 'product'),
            this.getByID(obj.size_id, 'size'),
            this.getByID(obj.color_id, 'color'),
            this.getByID(obj.grammage_id, 'grammage'),
          ]);
          console.log('list: ', obsList);
          return obsList;
        })
      )
      /* map((obs) => ({ product: obs })) */
      /* tap(console.log) */
    );
  }

  /*tamporary comment  
  
  getAllProducts_v2() {
    let index = 0;
    return this.http.get(`${this.apiURL}/product_properties`).pipe(
      mergeMap((arr: any) => {
        return arr.map((obj: any) =>
          zipWith(
            this.getByID(obj.product_id, 'product'),
            this.getByID(obj.size_id, 'size'),
            this.getByID(obj.color_id, 'color')
            // this.getByID(obj.grammage_id, 'grammage')
          )
        );
      }),
      map((arr) => {
        console.log('->!', arr);
      })
      // mergeMap((arr: any) => ({arr})),
    );
  }
  */

  /* tamporary comment  

  getAllProducts_v1() {
    return this.http.get<any[]>(`${this.apiURL}/product_properties`).pipe(
      //array destructuring [ obj ] equivalent to obj = res[0]
      map(([obj]) => ({
        producto: obj.product_id,
        precio: `${obj.price} $.`,
        tamaño: obj.size_id,
        color: obj.color_id,
        gramage: obj.grammage_id,
      }))
    );
  } */

  currenTime = new Observable<string>((observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
