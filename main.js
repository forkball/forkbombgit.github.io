//handler for general nav
$("#nav-general").on("click",function(e){
	e.preventDefault();
	$(this).parent().addClass("active")
	$("#nav-games").parent().removeClass("active");
	$("#games").fadeOut(200,function(){
		$("#general").removeClass("hidden");
		$("#general").fadeIn(200);
		$("#games").addClass("hidden");
	});
});

//handler for game nav
$("#nav-games").on("click",function(e){
	e.preventDefault();
	$(this).parent().addClass("active")
	$("#nav-general").parent().removeClass("active");
	$("#general").fadeOut(200,function(){
		$("#games").removeClass("hidden");
		$("#games").fadeIn(200);
		$("#general").addClass("hidden");
	});
});
