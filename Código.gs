function myFunction() {

  /* Hola mundo Calendario */
  
  //Este código crea un nuevo evento en el calendario, llamado "Mi primer evento", todo el día de hoy.
  var now = new Date();
  var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Mi primer evento', now);

}

