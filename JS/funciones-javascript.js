const hacerAlgo = (arg1, arg2) => {
    // apunta al objeto global
    console.log(this);
    // la variables se convierten en globales
    this.a = arg1;
    this.b = arg2;
    // pepito
    console.log(a);
    // juanito
    console.log(b);
}
const resultado = hacerAlgo('pepito', 'juanito');
// pepito
console.log(a);
// juanito
console.log(b);
// error
console.log(c);

// Función New
function hacerArgo(a, c) {
    // hacerAlgo {}
    console.log(this);
    this.a = arg1;
    this.b = arg2;
    // a
    console.log(this.a);
    // undefined
    console.log(this.c);
    // error
    // console.log(a);
    // error
    // console.log(b);
}
let resu = new hacerArgo('hola', 'buenos días');
// a
console.log(resu.a);
// b
console.log(resu.c);
// error
// console.log(a);
// error
// console.log(b);
// error
// console.log(c);
// error
// console.log(d);