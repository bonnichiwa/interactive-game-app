$(document).ready(function() {
  $('#commence-button').click(function() {
    $("#landing-page").fadeOut(1500);
    $("#quiz-interface").fadeIn(1500);
  })

  $('#new-button').click(function() {
    $("#quiz-interface").fadeOut(1500);
    $("#landing-page").fadeIn(1500);
  })
});