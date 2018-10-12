$(function () {
  var cipher = "XHUwMDZiXHUwMDMxXHUwMDc1XHUwMDMzXHUwMDcwXHUwMDMzXHUwMDQwXHUwMDY0XHUwMDZlXHUwMDc5XHUwMDY4XHUwMDcyXHUwMDJlXHUwMDY2XHUwMDcyXHUwMDcw";

  var hireButton = $("#navbar-hire");
  var hireGame = $("#hire-game");

  hireButton.click(function () {
    ga('send', 'event', 'hire me button', 'click');
    hireButton.addClass("vanishOut");

    setTimeout(function () {
      hireButton.hide();
      hireGame.show();
      printHireMsg();
    },900);

    function printHireMsg() {
      console.log(window.location.origin + "/img/decrypt-me.jpg?cipher=" + cipher);
    }
  });
});
