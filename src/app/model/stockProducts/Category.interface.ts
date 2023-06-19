import { Properties } from './Properties.interface';

export interface Category {
    idCategory: number;
    name: string;
    props: Properties;
    subCategory: string;          //talonario | membretado
}