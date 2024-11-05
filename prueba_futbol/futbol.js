/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *
 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

function goles() {
    document.write("JUGADORES CON MAS DE 20 GOLES:<br/>");
    let goles=0;
    futbolistas.forEach(jugador => {
        if (jugador.goles>20) {
            document.write(`${jugador.nombre} tiene mas de 20 goles<br/>`);
        }
        goles+=jugador.goles;
    });
}

function ordenarAsistencias() {

    console.log("ORDENAR POR ASISTENCIAS:");
    futbolistas.sort((a,b)=>b.asistencias - a.asistencias);
    console.log(futbolistas);

}

function tarjetasAmarillas() {

    document.write("<br/><br/>TARJETAS AMARILLAS EN CADA EQUIPO:<br/>");
    let e1=0;
    let e2=0;
    let e3=0;
    let e4=0;
    let e5=0;
    let e6=0;
    let e7=0;

    futbolistas.forEach(jugador => {
        if(jugador.equipo==="Inter Miami"){
            e1+=jugador.asistencias;
        }else{
            if (jugador.equipo==="Al Nassr") {
                e2+=jugador.asistencias;
            } else {
                if (jugador.equipo==="Manchester City") {
                    e3+=jugador.asistencias;
                } else {
                    if (jugador.equipo==="Liverpool") {
                        e4+=jugador.asistencias;
                    } else {
                        if (jugador.equipo==="Real Madrid") {
                            e5+=jugador.asistencias;
                        } else {
                            if (jugador.equipo==="Paris Saint-Germain") {
                                e6+=jugador.asistencias;
                            } else {
                                if (jugador.equipo==="Al-Hilal") {
                                    e7+=jugador.asistencias;
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    document.write(`Inter Miami tiene ${e1} asistencias en total<br/>`);
    document.write(`Al Nassr tiene ${e2} asistencias en total<br/>`);
    document.write(`Manchester City tiene ${e3} asistencias en total<br/>`);
    document.write(`Liverpool tiene ${e4} asistencias en total<br/>`);
    document.write(`Real Madrid tiene ${e5} asistencias en total<br/>`);
    document.write(`Paris Saint-Germain tiene ${e6} asistencias en total<br/>`);
    document.write(`Al-Hilal tiene ${e7} asistencias en total<br/>`);

}

function promedioGoles() {

    document.write("<br/><br/>JUGADOR CON MAYOR PROMEDIO DE GOLES:<br/>");
    let media=0;
    futbolistas.forEach(jugador => {
        media=jugador.goles/jugador.partidosJugados;

        document.write(`El jugador ${jugador.nombre} tiene un promedio de ${media} goles por partido<br/>`);
        
    });
    
}

function masAsistencias() {
    
    document.write("<br/><br/>JUGADOR CON MAS ASISTENCIAS:<br/>");
    let maxAsistencias= futbolistas.reduce((max, jugador) =>{
        return (jugador.asistencias >max.asistencias) ? jugador : max;
    });

    document.write(`El jugador con mas asistencias es ${maxAsistencias.nombre}, con un total de ${maxAsistencias.asistencias} asistencias`);
}

function listarPosicion() {

    const posiciones= {
        portero:[],
        defensa:[],
        delantero:[],
        mediocampista:[]
    };
    futbolistas.forEach(jugador => {
        if (jugador.posicion === "Portero") {
            posiciones.portero.push(jugador.nombre);
        }else if (jugador.posicion === "Defensa") {
            posiciones.defensa.push(jugador.nombre);
        } else if (jugador.posicion === "Delantero") {
            posiciones.delantero.push(jugador.nombre);
        } else {
            posiciones.mediocampista.push(jugador.nombre);
        }
    });
    
    console.log("PORTEROS:");
    console.log(posiciones.portero);
    console.log("DEFENSA:");
    console.log(posiciones.defensa);
    console.log("DELANTERO:");
    console.log(posiciones.delantero);
    console.log("MEDIOCAMPISTA:");
    console.log(posiciones.mediocampista);
    
}


goles();
ordenarAsistencias();
tarjetasAmarillas();
promedioGoles();
masAsistencias();
listarPosicion();