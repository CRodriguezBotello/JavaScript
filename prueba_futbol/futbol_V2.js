Ir al contenido principal
Google ClassroomClassroom
24-25 DWENC2DAW
Inicio
Calendar
Cursos en los que te has inscrito
Tareas pendientes
2
24-25 2DAW DWES (Servidor)
2DAW
2
24-25 2DAW DIW
2DAW
2
24-25 2DAW Despliegue de Aplicaciones Web (DEAP)
2DAW
2
2425 EIE daw MI
2
24-25 2DAW Tutoría
2DAW
2
24-25 DWENC
2DAW
2
24-25 DIW
2DAW
2
23-24 1DAW BBDD
1DAW
2
22-23 1DAW LM
1DAW
2
23-24 1DAW Tutoría (TUT)
TUT
Clases archivadas
Ajustes
Detalles del material
Ejercicios extra Arrays
Alberto Dominguez
•
30 oct (Última modificación: 31 oct)
Ejercicios sobre arrays (listas dentro de objetos).
Solución (scriptResuelto.js)
script.js
JavaScript
scriptResuelto.js
JavaScript
Comentarios de la clase
Añade un comentario de clase…

/**********************************************************************************************
*             EJERCICIOS EXTRAS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY         *                                   
**********************************************************************************************/


const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Orlando City", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "LA Galaxy", goles: 2, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "New York Red Bulls", goles: 0, asistencias: 0, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Al Hilal", goles: 1, asistencias: 0, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Al Shabab", goles: 2, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Al Ahli", goles: 0, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: true }
        ]
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        partidosJugados: [
            { rival: "Liverpool", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: Usa map() y reduce() para calcular el total de goles y asistencias de cada jugador en sus partidos.
 */
const estadisticasTotales = futbolistas.map(jugador => {
    const totalGoles = jugador.partidosJugados.reduce((total, partido) => total + partido.goles, 0);
    const totalAsistencias = jugador.partidosJugados.reduce((total, partido) => total + partido.asistencias, 0);
    return { nombre: jugador.nombre, totalGoles, totalAsistencias };
});
console.log(estadisticasTotales);

/**
 * ACT 1 - EXTRA:
 *
 */
function act1(){
    for(let i = 0; i < futbolistas.length; i++){
        let totalGyA = 0;
        for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){
            totalGyA += futbolistas[i].partidosJugados[j].goles + futbolistas[i].partidosJugados[j].asistencias;
        }
        console.log("El futbolista " + futbolistas[i].nombre + " suma un total de " + totalGyA);
    }
}

console.log("*************************************************");
console.log("               MOSTRANDO ACT 1                   ");
console.log("*************************************************");
act1();


/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan recibido al menos una tarjeta roja en algún partido.
 */
const jugadoresConRojas = futbolistas.filter(jugador => 
    jugador.partidosJugados.some(partido => partido.tarjetaRoja)
);
console.log(jugadoresConRojas);

function act2(){
    for(let i = 0; i < futbolistas.length; i++){
        for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){
            if(futbolistas[i].partidosJugados[j].tarjetaRoja){
                console.log("El jugador " + futbolistas[i].nombre + " recibió una tarjeta roja");
            }
        }
    }
}

console.log("*************************************************");
console.log("               MOSTRANDO ACT 2                   ");
console.log("*************************************************");
act2();



/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y, si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
 */
const rivalesEnLosQueAnoto = (nombreJugador) => {
    const jugador = futbolistas.find(j => j.nombre === nombreJugador);
    if (jugador) {
        return jugador.partidosJugados
            .filter(partido => partido.goles > 0)
            .map(partido => partido.rival);
    } else {
        return "Jugador no encontrado";
    }
};
console.log(rivalesEnLosQueAnoto("Lionel Messi"));


function act3(){
    let nombreJugador = prompt("Introduce el nombre del jugador");
    const arrayEquiposRivales = [];

    for(let i = 0; i < futbolistas.length;i++){
        if(futbolistas[i].nombre == nombreJugador){
            for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){
                if(futbolistas[i].partidosJugados[j].goles > 0){
                    arrayEquiposRivales.push(futbolistas[i].partidosJugados[j].rival);
                   
                }
            }
            document.write("El futbolista introducido anotó ante los siguientes rivales: ");
            document.write(arrayEquiposRivales);
        }
    }
}

console.log("*************************************************");
console.log("               MOSTRANDO ACT 3                   ");
console.log("*************************************************");
//act3();

/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de tarjetas amarillas recibidas en los partidos para cada jugador.
 */
const promedioAmarillasPorJugador = futbolistas.map(jugador => {
    const totalAmarillas = jugador.partidosJugados.reduce((total, partido) => total + (partido.tarjetaAmarilla ? 1 : 0), 0);
    const promedio = totalAmarillas / jugador.partidosJugados.length;
    return { nombre: jugador.nombre, promedioAmarillas: promedio };
});
console.log(promedioAmarillasPorJugador);

function act4(){

    for(let i = 0; i < futbolistas.length; i++){
        let contadorAmarilla = 0;
        for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){
            if(futbolistas[i].partidosJugados[j].tarjetaAmarilla){
                contadorAmarilla++;
            }
        }
        console.log("El promedio de amarillas del jugador " + futbolistas[i].nombre + " es " + contadorAmarilla/futbolistas[i].partidosJugados.length);
    }
}


console.log("*************************************************");
console.log("               MOSTRANDO ACT 4                   ");
console.log("*************************************************");
act4();

/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan anotado al menos un gol en cada uno de sus partidos.
 */
const jugadoresSiempreAnotan = futbolistas.filter(jugador => 
    jugador.partidosJugados.every(partido => partido.goles > 0)
);
console.log(jugadoresSiempreAnotan);

console.log("*************************************************");
console.log("               MOSTRANDO ACT 5                   ");
console.log("*************************************************");
act5();

function act5(){
    for(let i = 0; i < futbolistas.length; i++){
        let contadorGolEnTodosPartidos = 0;
        for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){
            if(futbolistas[i].partidosJugados[j].goles > 0){
                 contadorGolEnTodosPartidos++;
            }
        }
        if(contadorGolEnTodosPartidos == futbolistas[i].partidosJugados.length){
            console.log("El futbolista " + futbolistas[i].nombre + " ha anotado gol en todos sus partidos disputados");
        }
    }
}

scriptResuelto.js
Mostrando script.js.