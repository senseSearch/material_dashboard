export interface Attributes{
    
    idProperty?: number;
    price: number;
    colors: string[];
    size: string;
    grammage: number;

    urlImgMuestra: string;
    urlImgModelo: string;
    properties?: [];
    details?: string;

    //talonarios
    nCopias: number;
    orintacion: string;
    materialCopia: boolean;     // true=quimico; false=normal
    enumeracion: string;           // "desde - hasta"
    emblocado: boolean;         // false = rillado
    colorImpReverso: string[];

    //cards
    plastificado?: "brillo" | "mate" | false;
    sectorizado: boolean;
    troquel: boolean;

    /* name!: string;
    values?: string[] | number[] | boolean; 
    
    [price 1]
    [prop1 1]
    [prop2 1]
    [prop3 1]
    */
}