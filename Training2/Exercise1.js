/*
Exercise N° 1:
De un grupo de personas debemos filtrar aquellas que su d.n.i inicia con 3
y que poseen un ticket de entrada
Ejemplo:
Recive
--> [{name:"Juan",ticket_in: true,dni:"30.435.465"},{name:"Gabi",ticket_in: false,dni:"32.887.889"}]
Return
--> ["Juan"]
*/
const group_people = [
  { name: "Juan", ticket_in: true, dni: "30.435.465" },
  { name: "Gabi", ticket_in: false, dni: "32.887.889" },
  { name: "Vanesa", ticket_in: true, dni: "26.654.554" },
  { name: "Romi", ticket_in: true, dni: "33.221.543" },
];

function people_filter(arr) {
    let respuesta = [];
    for(i = 0; i < arr.length; i++)
    {
      if(arr[i].dni[0] === '3' && arr[i].ticket_in === true)
      {
        respuesta.push(arr[i].name);
      }
    }
    return respuesta;
  }
console.log(people_filter(group_people));