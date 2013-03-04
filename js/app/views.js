FaceApp.module("Views", function(Views, FaceApp, Backbone, Marionette, $, _){
	
	// >Layout 
	// Registrer FaceApp.Views.Layout til å være en klasse av Marionette.Layout.
	// Dette er hoved layout på vår applikasjon.
	Views.Layout = Marionette.Layout.extend({
		template: '#templ-layout',
		regions: {
			content: '#content'
		}
	});
	
	// >ItemView: Representerer en enkel ting, og ikke en "collection / array"
	Views.IndexView = Marionette.ItemView.extend({
		template: '#templ-indexview'
	});
	

	Views.TestView = Marionette.ItemView.extend({
		template: '#templ-testview'
	});
	
});