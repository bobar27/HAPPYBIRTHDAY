$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var overlay = $("#overlay");
  var closeOverlayBtn = $("#close-overlay");
  var letter = $(".letter");
  var nextButton = $("#next-button");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  letter.click(function (e) {
    e.stopPropagation();
    overlay.removeClass("hidden");
    nextButton.addClass("hidden"); // Hide next button when overlay opens
  });

  overlay.click(function () {
    overlay.addClass("hidden");
    nextButton.removeClass("hidden"); // Show next button when overlay closes
  });

  closeOverlayBtn.click(function (e) {
    e.stopPropagation();
    overlay.addClass("hidden");
    nextButton.removeClass("hidden"); // Show next button when overlay closes
  });

  nextButton.click(function () {
    window.location.href = 'yourwish.html';
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
