// Her lager vi et nytt objekt av Marionette.Application "klassen".  
// Se "start.js", denne bruker FaceApp.start() for å starte b.l.a. Backbone.history.
// FaceApp er nå globalt tilgjengelig i ALLE JS filer vi inkluderer!
var FaceApp = new Backbone.Marionette.Application();

// Legg til hovedregionen, se <div id="main"> .. i index.html
// Vi har nå tilgang til FaceApp.mainRegion (mainRegion er en instans av Marionette.Region)
FaceApp.addRegions({
	mainRegion: '#main'
});

// Vi legger til en lytter på "initialize:after" event.
// funksjonen som vi passer til "on" som 2. argument blir kjørt etter 
// alle initializers som er lagt til med  FaceApp.addInitializer(...)
FaceApp.on("initialize:after", function(options){
	console.log("Starting backbone.history (now running the route we find based on URL)");
	if (Backbone.history){
		Backbone.history.start();
	}
});


