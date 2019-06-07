$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    var build1 = ($("#build").val());
    var platform1 = ($("#platform").val());
    var interest1 = ($("#interest").val());


    event.preventDefault();

    if (build1 === "Game"){
      var num1 = 2
    } else if (build1 === "Web"){
      var num1 = 3
    } else if (build1 === "Mobile"){
      var num1 = 5
    } else if (build1 === "Desktop Software"){
      var num1 = 7
    } else {
      var num1 = 11
    }

    if (platform1 === "Windows"){
      var num2 = 13;
    } else if (platform1 === "Mac"){
      var num2 = 17;
    } else if (platform1 === "iOS"){
      var num2 = 19;
    } else {
      var num2 = 23;
    }

    if (interest1 === "How to interact with things"){
      var num3 = 29
    } else {
      var num3 = 31
    }

      var result = (num1*num2*num3)%3

      prompt("hi");
      $("#celphoto").append('<img src=img/celeb' + result +'.jpg>');


      // event.preventDefault();

  });
});
