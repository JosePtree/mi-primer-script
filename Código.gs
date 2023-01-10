function myFunction() {

  /* Hola mundo SHEETS */
  
  //Este código crea una nueva hoja de calculo llamada "Mi primera sheet" con 50 filas y 5 columnas
  var ssNew = SpreadsheetApp.create("Mi primera sheet ", 50, 5);

  //URL de la sheet
  Logger.log(ssNew.getUrl());

}

