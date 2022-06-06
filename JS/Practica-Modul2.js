// gestor,
// cliente, mensaje y transferencia.

const gest1 = {
    gestor:'Jedis',
    cliente:'Obi Juan',
    mensaje:'Para comprar el pan',
    transferencia:'500€'
};
const gest2 = {
    gestor:'Siths',
    cliente:'Darth Vader',
    mensaje:'Hipoteca',
    transferencia:'1000€'
};
const gest3 = {
    gestor:'Consulado',
    cliente:'Grogu',
    mensaje:'Gym enero',
    transferencia:'40€'
};


// Unimos los objetos por clases y los convertimos en arrays:

gestores=[gest1.gestor, gest2.gestor, gest3.gestor];
// const ArrayGest=Object.keys(gestores);
const ArrayGest=Object.entries(gestores);

clientes=[gest1.cliente, gest2.cliente, gest3.cliente];
// const ArrayClie=Object.keys(clientes);
const ArrayClie=Object.entries(clientes);

mensajes=[gest1.mensaje, gest2.mensaje, gest3.mensaje];
// const ArrayMens=Object.keys(mensajes);
const ArrayMens=Object.entries(mensajes);

transferencias=[gest1.transferencia, gest2.transferencia, gest3.transferencia];
// const ArrayTrans=Object.keys(transferencias);
const ArrayTrans=Object.entries(transferencias);

// Mostramos los Arrays por categorías: 
console.log("Gestores:");
for(let i in ArrayGest){
    console.log(ArrayGest[i]);
}
console.log("Clientes:");
for(let i in ArrayClie){
    console.log(ArrayClie[i]);
}
console.log("Mensajes:");
for(let i in ArrayMens) {
    console.log(ArrayMens[i]);
}
console.log("Transferencias:");
for(let i in ArrayTrans){
    console.log(ArrayTrans[i]);
}
// Conversión de los Array a JSON
console.log("Pasamos a JSON los diferentes Arrays:")
const JsonGest = JSON.stringify(ArrayGest);
const JsonClie = JSON.stringify(ArrayClie);
const JsonMens = JSON.stringify(ArrayMens);
const JsonTrans = JSON.stringify(ArrayTrans);

console.log(JsonGest);
console.log(JsonClie);
console.log(JsonMens);
console.log(JsonTrans);

// Pasar de JSON a ARRAYs:

// Programa que haga uso del servicio web del banco y realice una petición con AJAX:

//Función en JS que obtenga todos los gestores de forma periódica cada 5  segundos:

//Migra el código a una aplicación TypeScript:

//Migrar el código a una aplicación de Angular: 



//Pruebas no validas
    //Unimos todos los objetos y lo convertimos en un mismo Array:
        // ObjetoCompleto=[gest1, gest2, gest3];
        // const ObjetoCompleto = Object.keys(ArrayCompleto);



    // Bucles de reconocimiento Array, Comprobación OK!
        // for(let i in gest1A){
        // console.log(i);
        // console.log(gest1A[i]);
        // console.log(gest1[gest1A[i]]);
        // }
        // for(let i in gest2A){
        //     console.log(i);
        //     console.log(gest2A[i]);
        //     console.log(gest2[gest2A[i]]);
        // }
        // for(let i in gest3A){
        //     console.log(i);
        //     console.log(gest3A[i]);
        //     console.log(gest3[gest3A[i]]);}