let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];


console.log("1. Personas en la lista:");
for (let person of people) { console.log(person); 
} 


let indexDani = people.indexOf("Dani"); 
if (indexDani !== -1) { 
people.splice(indexDani, 1); 
} 


let indexJuan = people.indexOf("Juan"); 
if (indexJuan !== -1) { 
people.splice(indexJuan, 1); 
} 


let luis = people.splice(indexLuis, 1)[0];
people.unshift(luis);



let miNombre = "Kim"; 
people.push(miNombre); 
console.log("2. Personas en la lista después de agregar Kim:");
for (let person of people) {
    console.log(person);
}



console.log("itera el arreglo y finaliza despues de que se imprima Maria':"); 
for (let person of people) { 
console.log(person); 
if (person === "Maria") { 
break; 
} 
} 


let indexMaria = people.indexOf("Maria"); 


console.log("Indice donde se encuentra Maria:"); 
console.log(`Lista donde se encuentra Maria: ${people}.`);
console.log(`Indice de Maria: ${indexMaria}.`);
