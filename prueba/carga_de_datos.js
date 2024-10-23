'use strict'

let dato=`12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora`;
let alumnos=[];

let numero= Number(prompt("Introduce el Numero del Documento a buscar"));
datos(dato);
// mostrar_datos();
buscar_numero(numero);
nuevo_dato();
borrar();

function datos(dato) {
    
    let filas=dato.split('\n');


    for (let i = 0; i < filas.length; i++) {
        
        let campo=filas[i].split(',');

        for (let j = 0; j < campo.length; j++) {
            campo[j]=campo[j].trim();
            
        }

        alumnos.push({
            numDoc: Number(campo[0]),
            nombre: campo[1],
            edad: Number(campo[2]),
            sexo: campo[3],
            puesto: campo[4]
        });
        
    }
}
function mostrar_datos() {

    for (let i = 0; i < alumnos.length; i++) {
        
        console.log(`
        Numero de Documento: ${alumnos[i].numDoc}
        Nombre del alumno: ${alumnos[i].nombre}
        Edad del alumno: ${alumnos[i].edad}
        Sexo del alumno: ${alumnos[i].sexo}
        Puesto de trabajo: ${alumnos[i].puesto}`
        );
        
    }
}

function buscar(numero) {
    return alumnos.find(e=>e.numDoc == numero);
    
}

function buscar_numero(numero) {

    let encontrado=buscar(numero);
    if (encontrado) {
        console.log(`
            Datos de ${encontrado.nombre}:
            Numero de Documento: ${encontrado.numDoc}
            Edad del alumno: ${encontrado.edad}
            Sexo del alumno: ${encontrado.sexo}
            Puesto de trabajo: ${encontrado.puesto}`);
    }else{
        console.log("No encontrado");
    }
    
}

function borrar() {
    
    let numero= Number(prompt("Introduce el Numero del Documento que quieras borrar"));

    /*for (let i = 0; i < alumnos.length; i++) {

        if (numero === alumnos[i].numDoc) {
            alumnos.splice(i, 1);
            console.log("Alumno eliminado");
        }
        
    }*/
    let i= alumnos.findIndex(e=>e.numDoc===numero);
    alumnos.splice(i,1);
    console.log("Alumno eliminado"); //Forma de borrar con FindIndex
    console.log(alumnos);
}

function nuevo_dato(){

    let numDoc= Number(prompt("Introduce el numero de documento del nuevo alumno"));
    let nombre= prompt("Introduce el nombre del alumno");
    let edad= Number(prompt("Introduce la edad del alumno"));
    let sexo= prompt("Introduce el sexo del alumno");
    let puesto=prompt("Introduce el puesto de trabajo del alumno");

    alumnos.push({
        numDoc: numDoc,
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        puesto: puesto
    });
    console.log(alumnos);

}