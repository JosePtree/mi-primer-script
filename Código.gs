function myFunction() {

  /* Hola mundo Forms */
  
  //Este código crea un nuevo formulario llamado "Mi primer formulario"
  var newForm = FormApp.create('Mi primer formulario');

  //URL del formulario
  Logger.log(newForm.getUrl());

}

