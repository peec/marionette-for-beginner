// Viktig, denne filen må bli inkludert etter alle andre js filer.
// Når appen er startet skal alle moduler være registrert.

// Når DOM er klar (jquery funksjon) for "document ready"
// Dette er den ENESTE document ready funksjonen vi bruker!!
$(function(){
	// Start Marionette Appen.
	// Nå er alt opp til marionette, dine ruter og kode... :)
	FaceApp.start();
});
