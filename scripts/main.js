//handler for general nav
$("#nav-about").on("click", function(e) {
  e.preventDefault();
  $(this)
    .addClass("active");
  $("#nav-projects,#nav-games")
    .removeClass("active");
  $("#about").removeClass("hidden");
  $("#general,#games").addClass("hidden");
});

//handler for general nav
$("#nav-projects").on("click", function(e) {
  e.preventDefault();
  $(this)
    .addClass("active");
  $("#nav-about,#nav-games")
    .removeClass("active");
  $("#general").removeClass("hidden");
  $("#about,#games").addClass("hidden");
});

//handler for general nav
$("#nav-games").on("click", function(e) {
  e.preventDefault();
  $(this)
    .addClass("active");
  $("#nav-about,#nav-projects")
    .removeClass("active");
  $("#games").removeClass("hidden");
  $("#general,#about").addClass("hidden");
});