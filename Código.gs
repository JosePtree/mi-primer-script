function myFunction() {

  /* Hola mundo Gmail */
  
  //Este código crea un nuevo borrador de correo con la fecha de hoy y lo envía a la dirección dada
  var now = new Date();
  var newDraft = GmailApp.createDraft("jose@ptree.com.mx", "Fecha exacta", "La fecha de hoy es: " + now.toString());

  //Envia el borrador
  newDraft.send();

}

