$(document).ready(function() {

  // $(".caja-informacion").hide();
  $("#about-me").show();

  $(document).on("click", ".nav-link", function() {
    $("#li-about-me").removeClass("active");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    // $(".caja-informacion").hide();
    $(this.hash).show();
  });

  $(document).on("click", "#home", function() {
    $(".nav-link").removeClass("active");
    $("#li-about-me").addClass("active");
    // $(".caja-informacion").hide();
    $("#about-me").show();
  });

});
