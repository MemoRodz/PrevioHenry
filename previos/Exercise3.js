/*
Exercise N° 3:
Crear una function que retorna otra function
y al ejecutar la function retornada esta recibe dos
números y los suma
*/
function retorno_otra_function() {
    // aquí tu code
    console.log(arguments[0], arguments[1]);
    return function() {arguments[0] + arguments[1];};
  }
  const save_function_interna = retorno_otra_function();
  console.log(save_function_interna(2, 7));