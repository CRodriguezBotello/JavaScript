'use strict'

let personas=[];

function introducir_datos() {
    
    while (true) {

        let numeroDoc = Number(prompt("Introduce el numero del Documento (0 para salir)"));
        if (numeroDoc===0) {
            
            break;

        }
        let edad;
        do{
            edad = Number(prompt("Introduce la edad"));
            console.log(edad);
        }while(edad<=0 || edad>=100);
        let sexo = prompt("Masculino o Femenino");
        while(sexo!=='Femenino' && sexo!=='femenino' && sexo!=='Masculino' && sexo!=='masculino'){
            sexo = prompt("Masculino o Femenino");
        }

        personas.push({
            numeroDoc: numeroDoc,
            edad: edad,
            sexo: sexo
        });
        
    }
}

function leer_Datos() {

    let censados=0;
    let varones=0;
    let mujeres=0;
    let varones2=0;

    personas.forEach(persona => {
        
        censados+=1;
        if(persona.sexo =='masculino' || persona.sexo == 'Masculino'){

            varones+=1;
            if (persona.edad>=16 && persona.edad<=65) {
                
                varones2+=1;
            }

        }
        if(persona.sexo =='femenino' || persona.sexo == 'Femenino'){

            mujeres+=1;
            
        }
    });

    document.write(`Hay ${censados} personas censadas <br/>`);
    document.write(`${varones} personas son varones<br/>`);
    document.write(`Dentro de los varones, ${varones2} estan entre los 16 y los 65 años<br/>`);
    document.write(`${mujeres} personas son mujeres<br/>`);
    
}

introducir_datos();
leer_Datos();