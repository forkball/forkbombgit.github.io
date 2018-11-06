$(".ml6 .letters").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

var bobble = function() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml6 .letter",
      translateY: ["1.1em", 0],
      duration: 750,
      delay: function(el, i) {
        return i;
      }
    })
    .add({
      targets: ".ml6",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
};

bobble();
$("h1 > span").on("click", function(e) {
  bobble();
});

//handler for general nav
$("#nav-general").on("click", function(e) {
  e.preventDefault();
  $(this)
    .parent()
    .addClass("active");
  $("#nav-games")
    .parent()
    .removeClass("active");
  $("#games").fadeOut(200, function() {
    $("#general").removeClass("hidden");
    $("#general").fadeIn(200);
    $("#games").addClass("hidden");
  });
});

//handler for game nav
$("#nav-games").on("click", function(e) {
  e.preventDefault();
  $(this)
    .parent()
    .addClass("active");
  $("#nav-general")
    .parent()
    .removeClass("active");
  $("#general").fadeOut(200, function() {
    $("#games").removeClass("hidden");
    $("#games").fadeIn(200);
    $("#general").addClass("hidden");
  });
});
