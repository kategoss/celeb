

$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var personalityInput = $("input:radio[name=personality]:checked").val();
    var activityInput = $("#activity").val();
    console.log(activityInput);
    var foodInput = $("#food").val();

    $(".personality").text(personalityInput);
    $(".activity").text(activityInput);
    $(".food").text(foodInput);

    if (activityInput === "Shopping") {
      $("#culkin").toggle();
      $("#culkin").siblings().hide();
    } else if (activityInput === "Camping") {
      $("#beyonce").toggle();
      $("#beyonce").siblings().hide();
    } else if (activityInput === "Sleepy") {
      $("#jonah").toggle();
      $("#jonah").siblings().hide();
    }

    event.preventDefault();
  });
});
