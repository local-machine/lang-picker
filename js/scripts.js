$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    var build1 = ($("#build").val());
    var platform1 = ($("#platform").val());
    var interest1 = ($("#interest").val());


    event.preventDefault();

    if (build1 === "Game"){
      var num1 = 3
    } else if (build1 === "Web"){
      var num1 = 6
    } else if (build1 === "Mobile"){
      var num1 = 9
    } else if (build1 === "Desktop Software"){
      var num1 = 12
    } else {
      var num1 = 15
    }

    if (platform1 === "Windows"){
      var num2 = 18;
    } else if (platform1 === "Mac"){
      var num2 = 21;
    } else if (platform1 === "iOS"){
      var num2 = 24;
    } else {
      var num2 = 27;
    }

    if (interest1 === "How to interact with things"){
      var num3 = 30
    } else {
      var num3 = 33
    }

      var result = (num1*num2*num3)%3

      prompt("hi");
      $("#lang").append('<img src=img/lang' + result +'.jpg>');


      // event.preventDefault();

  });
});
