/*
  Exercise N° 3:
  Dado un objeto original crear dos funciones donde una función toma al objeto, 
  lo guarda en otra variable y al modificar los datos de este objeto
  procure que si modifique la info que contiene el objeto original;
  pero la otra que solo cree un clon de este (pueden usar spread operator) 
  y actualice valores de este sin modificar lo que contiene el objeto original.
  */
  
  const obj_original = {
    a: 1,
    b: 2,
    z: "que",
  };
  
  function one(obj) {
   console.log(obj);
   const new_obj = obj;
   new_obj.moto = 2022;
  }
  one(obj_original);
  console.log(obj_original);
  
  function two(obj) {
    console.log(obj);
    const new_obj2 = {...obj};
    new_obj2.autito = 1213;
    console.log(new_obj2);
  }
  two(obj_original);
  console.log(obj_original);