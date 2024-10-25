'use script';

let tmanana=[];
let ttarde=[];
let tnoche=[];

for (let i = 0; i < 11; i++) {
    if (i<5) {
        tmanana[i]= Number(prompt("Edad del alumno "+(i+1)+" de mañana"));
    }
    if (i<6) {
        ttarde[i]= Number(prompt("Edad del alumno "+(i+1)+" de tarde"));
    }
    tnoche[i]= Number(prompt("Edad del alumno "+(i+1)+" de noche"));
}

operaciones();

function operaciones() {
    let mediam=0;
    let mediat=0;
    let median=0;

    for (let i = 0; i < 11; i++) {
        if (i<5) {
            mediam+=tmanana[i];
            mediam=mediam/5;
        }
        if (i<6) {
            mediat+=ttarde[i];
            mediat=mediat/6;
        }
        median+=tnoche[i];
        median=median/11;
    }

    document.write(`El turno de mañana tiene una media de ${mediam} años<br/><br/>`);
    document.write(`El turno de tarde tiene una media de ${mediat} años<br/><br/>`);
    document.write(`El turno de noche tiene una media de ${median} años<br/><br/>`);

    if (mediam>median && mediam>mediat) {
        document.write(`La media de la mañana es el turno con mayor promedio`)
    }else{
        if (mediat>mediam && mediat>median) {
            document.write(`La media de la tarde es el turno con mayor promedio`)
        }else{
            document.write(`La media de la noche es el turno con mayor promedio`)
        }
    }

    console.log(tmanana);
    console.log(ttarde);
    console.log(tnoche);
    console.log(mediam);
    console.log(mediat);
    console.log(median);
}