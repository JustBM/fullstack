// console.log(multiplicar(1,2));
// console.log(dividir(1,2));
//Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.
const sumar =(x,y) => x+y; 
const restar =(x,y) => x-y;
const multiplicar =(x,y) =>x*y;
const dividir =(x,y) => x/y;
console.log(sumar(4,2));
console.log(restar(3,1));
console.log(multiplicar(7,5));
console.log(dividir(12,6)); 
// const sumar =(x,y) => x+y; 
// const restar =(x,y) => x-y;
// const multiplicar =(x,y) =>x*y;
// const dividir =(x,y) => x/y;
// console.log(sumar(4,2));
// console.log(restar(3,1));
// console.log(multiplicar(7,5));
// console.log(dividir(12,6));
//Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.
const sumar2 =(x,y,callback) => callback(x+y); 
const restar2 =(x,y,callback) => callback(x-y);
const multiplicar2 =(x,y,callback) =>callback(x*y);
const dividir2 =(x,y,callback) => callback(x/y);

// const callback = (resultado) => {
//     console.log(resultado);
// }
//Ejercicio 4 pg 177
sumar2(4,2,(resultado) => {
    console.log(resultado);
});
restar2(3,1,(resultado) => {
    console.log(resultado);
});
multiplicar2(5,7,(resultado) => {
    console.log(resultado);
});
dividir2(6,8,(resultado) => {
    console.log(resultado);
}); 

//Ejercicio 5 pagina 178
setTimeout(() => {
    sumar2(4,2,(resultado) => {
        console.log(resultado);
    });
}, 1000);
setTimeout(() => {
    restar2(3,1,(resultado) => {
        console.log(resultado);
    });
}, 2000);
setTimeout(() => {
    multiplicar2(5,7,(resultado) => {
        console.log(resultado);
        });
}, 3000);
setTimeout(() => {
    dividir2(6,8,(resultado) => {
        console.log(resultado);
    }); 
}, 4000);