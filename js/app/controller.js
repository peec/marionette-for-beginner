FaceApp.module("Controller", function(Controller, FaceApp, Backbone, Marionette, $, _){

	

	Controller.index = function(){
		console.log("Controller.index running.");
		FaceApp.layout.content.show(new FaceApp.Views.IndexView());
	};
	
	
	Controller.test = function (arg1, arg2) {
		console.log("Controller.test running.");
		FaceApp.layout.content.show(new FaceApp.Views.TestView());
	};
	
	
	
	// Layout skal alltid vises i mainRegionen uansett hvilken kontroller metode som 
	// kjøres. Derfor legger vi en initializer for å vise layout.
	FaceApp.addInitializer(function(){
		console.log("Setting default layout to FaceApp.layout and showing it to FaceApp.mainRegion.");
		// Vi har nå tilgang til layouten med FaceApp.layout.
		FaceApp.layout = new FaceApp.Views.Layout();
		// Vis layouten i hoved regionen.
		FaceApp.mainRegion.show(FaceApp.layout);
	});
});