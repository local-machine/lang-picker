$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    var country = ($("#country").val());
    var lotr = ($("#lotr").val());
    var weapon = ($("#weapon").val());
    var money = ($("#money").val());
    var admire = ($("#admire").val());

    event.preventDefault();

    if (country === "Italy - Massively influential and loved by everyone, but breaks down easily."){
      var quest1 = 1
    } else if (country === "Netherlands - Hey no problem, let'sh do it guysh!"){
      var quest1 = 2
    } else if (country === "Switzerland -  Beautiful and well thought-out, but expect to pay a lot if you want to get seriously involved."){
      var quest1 = 3
    } else {
      var quest1 = 4
    }

    if (lotr === "Hobbit"){
      var quest2 = 1;
    } else if (lotr === "The Ent"){
      var quest2 = 2;
    } else if (lotr === "Elf"){
      var quest2 = 3;
    } else {
      var quest2 = 4;
    }

    if (weapon === "A sword without a hilt"){
      var quest3 = 1
    } else if (weapon === "A “v2/v3” double barrel shotgun"){
      var quest3 = 2
    } else if (weapon === "A laser rifle strapped to a donkey"){
      var quest3 = 3;
    } else {
      var quest3 = 4;
    }
    if (money === "I want to be comfortable."){
      var quest4 = 1
    } else if (money === "A lot."){
      var quest4 = 2
    } else if (money === "I don't care."){
      var quest4 = 3;
    } else {
      var quest4 = 4
    }
    if (admire === "Paypal, front-end of websites"){
      var quest5 = 1
    } else if (admire === "YouTube, Instagram & Spotify"){
      var quest5 = 2
    } else if (admire === "Enterprise & Windows applications"){
      var quest5 = 3;
    } else {
      var quest5 = 4
    }

    //prompt("hi");
      //return Math.floor(Math.random() * 4);
      var result = (num1+num2+num3+num4+num5)%5

      //prompt("hi");
      $("#lang").append('<img src=img/lang' + result +'.jpg>');

  });
});
