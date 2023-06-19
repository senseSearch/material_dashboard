export interface Properties {
  size: number;
  colors: string[];
  grammage: number;
  orientation: boolean; //true:horizontal, false:vertical
  colorReversePrint?: string[];   //la propiedad es opcional
  details: string;
  descuento: number;
  img_url_muestra: string;
  img_url_modelo: string;

  //propiedades de talonario
  numCopies: number;
  enumeration: number[];
  copyMaterial: boolean; //true:quimico, false:normal
  rilla?: boolean; //true:rillado, false:block
}