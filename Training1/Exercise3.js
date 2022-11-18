/*
Exercise N° 3:
Crear una function que retorna otra function
y al ejecutar la function retornada esta recibe dos
números y los suma
*/
function retorno_otra_function() {
    // aquí tu code
    return function (a,b) {
      return a + b;
    }
  }
const save_function_interna = retorno_otra_function();
console.log(save_function_interna(2, 7));