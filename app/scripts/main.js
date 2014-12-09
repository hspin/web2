$(function () {

  $('.navbar-collapse a').on('click', function(){

   if ( $( this ).hasClass( "in" ) ) {
       alert("yes");
    }
    //$(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });

});
