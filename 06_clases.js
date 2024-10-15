//definir clases con atributos dentro del constructor
class persona{
    constructor(nombre, edad, sexo, direccion){
        this._nombre=nombre;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
    }
/* 
   cuando la funcion esta dentro del objeto
   se llama metodo */
   saludar(){
    console.log(`hola ${this.nombre}`);

   }

   //Encapsulamiento setter y getter
   get nombre(){
    return this.nombre
   }

  /*  para reescribir */set nombre(values){
    this.nombre=values;
   }

}

let persona1=new persona("gerald",19,"m", "balancan");
persona1.nombre="bombillo";
console.log(persona1)
persona1.saludar();