//animate click fucntion

$(".btn").click(function () {
  let keyDown = $(this);
  keyDown.addClass("pressed");
  setTimeout(() => {
    keyDown.removeClass("pressed");
  }, 100);
});
