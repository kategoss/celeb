$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if(age > 18) {
    $("#of_age").show();
  } else if (age === 18) {
    alert("Congratulations! Have a great first vote!");
    $("#of_age").show();
  } else {
    $("#not_of_age").show();
  }
});
