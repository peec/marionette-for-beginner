/**
 * Forklaring av denne modul strukturen.
 * Marionette har laget en enkelt arkitektur på å lage moduler.
 * En modul defineres med AppVariabel.module("Mitt.Namespace.Objekt", funksjon);
 * 
 * Marionette oppretter modul objektet når appen starter og passer argumenter til modulen:
 * 
 * Modul instansen
 *   - Merk, vi kan bygge videre på denne, slik som vi gjør i denne "Controlleren".
 * Applikasjon instansen
 * Backbone objektet
 * Marionette objektet
 * jQuery
 * Underscore
 * 
 * 
 */
FaceApp.module("Controller", function(Controller, FaceApp, Backbone, Marionette, $, _){

	

	// En kontroller sin metode, tenk Ruter -> Controller.metode.
	Controller.index = function(){
		console.log("Controller.index running.");
		
		// Lengre nede i denne filen registrerer vi FaceApp.layout i en initializer.
		// Husk at initializer blir kjørt før denne koden, så den vil bli tilgjengelig!
		// Vi kan så kjøre følgende:
		FaceApp.layout.content.show(new FaceApp.Views.IndexView());
		// content er en Marionette.Region som blir registrert i FaceApp.Views.Layout.
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