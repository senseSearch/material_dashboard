import { Category } from "../Category.interface";
import { ProductProperties } from "./ProductProperties.model"

export class Product {

   constructor(
      private productId: number,
      private productName: string,
      private categoryId: number
   ){}

   public setCategory(categoryId : number){
      this.categoryId = categoryId;
   }

}