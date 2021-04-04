$(document).keypress(function (e) {
  var key = String.fromCharCode(e.which);
  switch (key) {
    case "q":
      $(".question").toggleClass("visible");
      break;

    case "1":
      $(".one").toggleClass("visible");
      break;
    case "2":
      $(".two").toggleClass("visible");
      break;
    case "3":
      $(".three").toggleClass("visible");
      break;
    case "4":
      $(".four").toggleClass("visible");
      break;
    case "5":
      $(".five").toggleClass("visible");
      break;
    case "6":
      $(".six").toggleClass("visible");
      break;
    case "7":
      $(".seven").toggleClass("visible");
      break;
    case "8":
      $(".eight").toggleClass("visible");
      break;
    case "9":
      $(".nine").toggleClass("visible");
      break;
    case "0":
      $(".ten").toggleClass("visible");
      break;
    case "z":
      $(".first").toggleClass("visible");
      break;
    case "x":
      $(".second").toggleClass("visible");
      break;
    case "c":
      $(".third").toggleClass("visible");
      break;
  }

  var sum = 0;
  $(".visible .avalue").each(function () {
    sum += parseFloat($(this).text());
  });

  document.getElementById("totalCount").innerHTML = sum;
});