/*
  Exercise N° 4:
  1. "metodo" es una cadena que contiene el nombre de un método (función) en el objeto
  2. Invoca ese método
  En este ejercicio !! Nada necesita ser devuelto ("returned")
  */
const objeto_contain = {
  id: 311,
  user: "Rococo",
  action: function () {
    return "ever paint";
  },
  from: "World",
  data: [{}, {}, {}],
};

function invocar_metodo(obj, metodo) {
  // tu code aquí
  if(obj.hasOwnProperty(metodo))
  {
    return obj[metodo]();
  }

}

console.log(invocar_metodo(objeto_contain, "action"));