$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if(age >= 18) {
    $("#of_age").show();
  } else {
    $("#not_of_age").show();
  }
});
