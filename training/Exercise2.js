/*
  Exercise N° 2:
  Dada una tabla de patrimonio. Debemos generar el balance (saldo) diario según
  el debe y el haber.
  Ejemplo:
  Recive
  --> [{dia:"lunes", debe:324, haber:500, saldo:0}, {dia:"martes", debe:650, haber:232, saldo:0}, etc...]
  
  Return
  --> [{dia:"lunes", debe:324, haber:500, saldo:176}, {dia:"martes", debe:650, haber:232, saldo:-418}, etc...]
  */
  const data_init = [
    { dia: "lunes", debe: 325, haber: 578, saldo: 0 },
    { dia: "martes", debe: 778, haber: 430, saldo: 0 },
    { dia: "miercoles", debe: 1000, haber: 232, saldo: 0 },
    { dia: "jueves", debe: 342, haber: 2114, saldo: 0 },
    { dia: "viernes", debe: 22300, haber: 3490, saldo: 0 },
  ];
  function balance_diario(array) {
   
  }
  
  console.log(balance_diario(data_init));