$(document).ready(function() {

  $("figcaption").hide();

  $(".btn-portfolio").on("mouseover", function(){
    $(this).children('figure').children("figcaption").show();
  });

  $(".btn-portfolio").on("mouseout", function(){
    $(this).children('figure').children("figcaption").hide();
  });

});
