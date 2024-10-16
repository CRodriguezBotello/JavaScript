'use strict';

let alumnos=[];
for (let i = 0; i < 10; i++) {
    alumnos[i]= Number(prompt("Introduce la nota del alumno "+(i+1)));
}
notas(alumnos);

function notas(alumnos){
    let mayores=0;
    let menores=0;
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i]>=7){
            mayores +=1;
            console.log(mayores);
        }else{
            menores +=1;
            console.log(menores);
        }
    }
    console.log(mayores);
    console.log(menores);
    document.write(mayores+" alumnos han sacado una nota mayor o igual a 7 <br/>");
    document.write(menores+" alumnos han sacado una nota menor a 7");
}