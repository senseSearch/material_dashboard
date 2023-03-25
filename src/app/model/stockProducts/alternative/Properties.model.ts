
export class Properties{
    
    private values?: string[] | number[] | boolean;
    private props: Map<string, string[] | number[] | boolean | undefined>;
    

    constructor(){
        this.props = new Map();
    }

    public addProperty(propName : string, value?: string[] | number[] | boolean){
        this.values = value;
        this.props.set(propName, value);
    }
    
    public getProperty(propName : string){
        return (this.props.get(propName));
    }

    public addPropValue(propName : string, value?: string[] | number[] | boolean){
        this.props.set(propName, value);
    }


    /** one thing is create a new attribute and another is add attrib value
     * {
     *  size: ["1/2", ],
     *  colors: ["azul", "fff566"]
     * }
     * 
     * ( + ) -> key nameProp
     * ( - ) -> value
     * 
     * |  -|  -|  -|  -|  -|  -|  -|
     * |  -|  -|  -|  -|  -|  -|  -|
     *  +   +   +   +   +   +   +
     *  ( + ) are the key 
     * 
     * key : values
     * key_1 : values
     * 
     * {
     *  [
     *      {name, values}
     *      {name1, values}
     *      {name2, values}
     *      {name3, values}
     *  ]
     * }
     * 
     * 
     */
}