function myFunction() {

  /* Hola mundo DOCS */
  
  //Este código crea un nuevo documento llamado "Mi primer doc"
  var newDoc = DocumentApp.create("Mi primer documento ");

  //URL de la sheet
  Logger.log(newDoc.getUrl());

}

