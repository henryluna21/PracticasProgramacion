const fechaActual = new Date();

const dia = fechaActual.getDate(); 
const mes = fechaActual.getMonth() + 1; 
const año = fechaActual.getFullYear(); 

console.log(`Fecha actual: ${dia}/${mes}/${año}`);
