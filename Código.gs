function myFunction() {

  /* Hola mundo DOCS */
  
  //Este código crea un nuevo documento llamado "Mi primer doc"
  var newDoc = DocumentApp.create("Mi primer documento ");

  //URL del documento
  Logger.log(newDoc.getUrl());

}

