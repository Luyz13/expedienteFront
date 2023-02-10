//Declaracion de variables:

const username = "luyz"; // -> Typescript puede inferir el tipo.

const correo : string = "algo";// -> Definiendo el tipo

const numero: string | number = "12"; // -> Puede tener dos tipos de datos.

// Declarar una funcion:

const sum = (a: number, b: number) => {
    return a + b;
}
console.log(sum(1,2));

//Declaración de una clase

class Persona{
    edad: number;
    lastname: string;

    constructor(edad: number, lastname: string)
    {
        this.edad=edad;
        this.lastname=lastname;
    }
}

const p1= new Persona(19,"Luis")

