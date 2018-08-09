
$(document).ready(function() {

$("#formOne").submit(function(event) {
    var personalityInput = $("input:radio[name=personality]:checked").val();
    var activityInput = $("#activity").val();
    console.log(activityInput);
    var foodInput = $("#food").val();

    $(".personality").text(personalityInput);
    $(".activity").text(activityInput);
    $(".food").text(foodInput);

    if (activityInput === "Camping") {
      $("#culkin").show();
      } else {
        console.log("We elsed!")
      }
    //   $("#culkin").siblings().hide();
    // } else if (activity === shopping) {
    //   $("#beyonce").show();
    //   $("#beyonce").siblings().hide();
    // } else if (activity === sleepy) {
    //   $("#jonah").show();
    //   $("#jonah").siblings().hide();
    // }

      event.preventDefault();
  });
});
