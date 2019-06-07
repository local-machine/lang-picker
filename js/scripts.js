$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    var var1 = ($("#orientation").val());
    var var2 = ($("#height").val());
    var var3 = ($("#eyes").val());
    var var4 = ($("#personality").val());


    event.preventDefault();

    if (var1 === "both male and female"){
      var num1 = 2
    } else if (var1 === "male"){
      var num1 = 3

    } else if (var1 === "female"){
      var num1 = 5
    } else {
      var num1 = 7
    }



    if (var2 === "5'2 or less"){
      var num2 = 11;

    }
    else if (var2 === "5'2-5'6"){
      var num2 = 13;
    }
    else if (var2 === "5'6-5'10"){
      var num2 = 17;
    }
    else if (var2 === "5'10-6'2"){
      var num2 = 19;
    }
    else {
      var num2 = 23;
    }


    if (var3 === "brown"){
      var num3 = 29

    } else if (var3 === "blue"){
      var num3 = 31

    } else {
      var num3 = 37
    }

    if (var4 === "Outgoing"){
      var num4 = 41

    } else if (var4 === "responsible"){
      var num4 = 43

    } else{
      var num4 = 47
    }

      var result = (num1*num2*num3*num4)%11+1


      $("#celphoto").append('<img src=img/celeb' + result +'.jpg>');


      // event.preventDefault();




  });
});
