$(document).ready(function() {
  $('#commence-button').click(function() {
    $("#landing-page").fadeOut(1000);
    $("#quiz-interface").fadeIn(1000);
  })

  $('#new-button').click(function() {
    $("#quiz-interface").fadeOut(1000);
    $("#landing-page").fadeIn(1000);
  })
});