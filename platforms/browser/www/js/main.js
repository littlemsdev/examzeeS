$( document ).ready(function() {
  console.log( "ready!" );
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $("#logout").click(function(){
    navigator.notification.confirm(
      "Do you want to exit the app?",
      function (button) {
        if (button == 2) {
          navigator.app.exitApp();
        }
      }
      ,
      "EXIT",
      'No,Yes'
    );
    return false;
  });
});
