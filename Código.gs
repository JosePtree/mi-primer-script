function myFunction() {

  /* Hola mundo Drive */
  
  //Este código crea un nuevo folder llamado "Mi primer folder" dentro del drive
  var newFolder = DriveApp.createFolder("Mi primer folder")

  //URL del folder
  Logger.log(newFolder.getUrl());

}

