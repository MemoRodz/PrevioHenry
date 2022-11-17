/*
Exercise N° 1:
Dado un conjunto de números enteros, detectar aquellos que son
números primos (son aquellos divisibles por si mismo y por uno)
y devolver la cantidad de números primos que encontramos.
​
Ejemplo:
[4, 5, 8, 10, 3, 11, 12, 13]
Tenemos 4 números primos
*/
const conjunto_de_numeros = [3, 7, 5, 4, 2, 11, 8, 10, 13];

function cant_num_primos(array) {
  // aquí tu code
  let respuesta = 0;
  
  for(let i = 0; i < array.length; i++)
  {
    if(array[i] > 1)
    {
      for(let j = 2; j < array[i]; j++)
      {
        if((array[i] % j) === 0)
        {
          respuesta = respuesta + 1;
        }
      }
    }
  }

  return respuesta;
}

console.log(cant_num_primos(conjunto_de_numeros));



