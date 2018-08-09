

$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var personalityInput = $("input:radio[name=personality]:checked").val();
    var activityInput = $("#activity").val();
    console.log(activityInput);
    var foodInput = $("#food").val();

    $(".personality").text(personalityInput);
    $(".activity").text(activityInput);
    $(".food").text(foodInput);

    if (activityInput === "Shopping" && foodInput === "Sushi") {
      $("#culkin").show();
      $("#culkin").siblings().hide();
      console.log(activity)
    } else if (activityInput === "Camping" && foodInput === "Salad") {
      $("#beyonce").show();
      $("#beyonce").siblings().hide();
    } else if (activityInput === "Shopping") {
      $("#jonah").show();
      $("#jonah").siblings().hide();
    } else if (personalityInput === "extroverted") {
      $("#beyonce").show();
      $("#jonah").show();
    }
    event.preventDefault();
  });
});
