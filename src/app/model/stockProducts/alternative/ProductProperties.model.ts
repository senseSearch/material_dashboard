export class ProductProperties {
/*  ANOTE ***
las clases :
    product
    category
    heredan de properties
*/

constructor(
    idProperty?: number,
    private price: number = 0,
    private colors: string[] = ["azul"],
    private size: string = "",
    private grammage: number = 0,

    //talonarios
    private nCopias: number = 0,
    private orintacion: string = "horizontal",
    private materialCopia: boolean = false,     // true=quimico, false=normal
    private enumeracion: string = "",           // "desde - hasta"
    private emblocado: boolean = false,         // false = rillado
    private colorImpReverso: string[] = [""],

    //cards
    private plastificado?: "brillo" | "mate" | false,
    private sectorizado: boolean = false,
    private troquel: boolean = false,

    private urlImgMuestra: string = "",
    private urlImgModelo: string = "",
    private properties?: [],
    private details?: string,
){}
/* 
    constructor(
        idProperty: number,
        price: number = 0,
        colors: string[] = ["azul"],
        size: string = "",
        grammage: number = 0,
        
        //talonarios
        nCopias: number = 0,
        orintacion: string = "horizontal",
        materialCopia: boolean = false,     // true=quimico; false=normal
        enumeracion: string = "",           // "desde - hasta"
        emblocado: boolean = false,         // false = rillado
        colorImpReverso: string[],

        //cards
        plastificado: "brillo" | "mate" | false,
        sectorizado: boolean = false,
        troquel: boolean = false,

        urlImgMuestra: string = "",
        urlImgModelo: string = "",
        properties?: [],
        details?: string,
    ){} */
 }