import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, zipWith } from 'rxjs/operators';
//import { Product } from '../model/stockProducts/Talonario.interface';

@Injectable({
    providedIn: 'root',
})

export class Product_v1Service {
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

}
