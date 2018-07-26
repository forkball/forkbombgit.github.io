//handler for general nav
$("#nav-general").on("click",function(e){
	e.preventDefault();
	$("#general").removeClass("hidden");
	$("#games").addClass("hidden");
	$(this).parent().addClass("active")
	$("#nav-games").parent().removeClass("active");
});

//handler for game nav
$("#nav-games").on("click",function(e){
	e.preventDefault();
	$("#games").removeClass("hidden");
	$("#general").addClass("hidden");
	$(this).parent().addClass("active")
	$("#nav-general").parent().removeClass("active");
});