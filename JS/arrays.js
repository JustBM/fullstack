const array1 = [];
const array2 = [20, 3, 8];
const array3 = ['Carmen', 'Juan'];
// otra forma de declarar arrays
const array4 = new Array(20, 3, 8);
const array5 = new Array(null, undefined, '', 8);
const array7 = new Array("lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo");
console.log(array7[2]);
console.log(array2[1]);
console.log(array7.length);
array7[7]="juernes"; //Añadimos un valor nuevo al array o machacamos los datos en el puesto que le digamos.
console.log(array7[7]);
console.log(array7) //Muestra en consola los valores del array.
array7.length=4; //Con esto acortamos el array7 hasta la posición que nosotros le especifiquemos. (Jueves)
console.log(array7);
const date1 = new Date();
console.log(date1);
const milisegundos= new Date().getTime();
console.log(milisegundos);
const date2 = new Date(milisegundos);
console.log(date2);