function myFunction() {

  /* Hola mundo Slides */
  
  //Este código crea una nueva presentación llamada "Mi primera slide"
  var newSlide = SlidesApp.create("Mi primera slide");

  //URL de la sheet
  Logger.log(newSlide.getUrl());

}

