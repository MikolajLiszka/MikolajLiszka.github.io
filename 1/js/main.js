let btn = document.getElementById("btn");

// $(document).ready(function LoadData() {
//   $("button").click(function () {
//     const newDiv = $('<div id="dane-programisty"></div>').appendTo('body');
//     $.getJSON(
//       "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
//       function (date) {
//         $.each(date, function(e, info) {
//            $('<p>').text(date.info).appendTo('#dane-programisty');
//         });
//       }
//     );
//   });
// });

$(document).ready(function LoadData() {
  $("button").click(function () {
    $.getJSON(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
      function (date) {
        $("<p>").text(date.imie).appendTo("#dane-programisty");
        $("<p>").text(date.nazwisko).appendTo("#dane-programisty");
        $("<p>").text(date.zawod).appendTo("#dane-programisty");
        $("<p>").text(date.firma).appendTo("#dane-programisty");
      }
    );
  });
  const newDiv = $('<div id="dane-programisty"></div>').appendTo("body");
});
