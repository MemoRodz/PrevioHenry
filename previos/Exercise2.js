/*
Exercise N° 2:
Dado una lista de paises retornar en un array aquellos que inicien
con la letra N
​
Ejemplo:
{
    id_1: "Nicaragua",
    id_2: "Guatemala",
    id_3: "Nigeria"
}
devolver ["Nigeria","Nicaragua"]
*/
const obj_de_paises = {
    id_1: "Brasil",
    id_2: "Nigeria",
    id_3: "Nepal",
    id_4: "Colombia",
    id_5: "Noruega",
  };
  ​
  function paises_con_n(obj) {
    // aquí tu code
    let respuesta = [];
    
    for(const key in obj)
    {
      if(obj[key][0] === "N")
      {
        respuesta.push(obj[key]);
      }
    }

    return respuesta;
  };
  console.log(paises_con_n(obj_de_paises));
  ​