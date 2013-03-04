
var HelloWorldApp = new Backbone.Marionette.Application();

HelloWorldApp.addRegions({
	mainRegion: '#main'
});

var AppRouter = Backbone.Marionette.AppRouter.extend({
	/* standard routes can be mixed with appRoutes/Controllers above */
	routes : {
		"" : "index",
		"test": "test"
	},
	index : function(){
		HelloWorldApp.mainRegion.show(new HovedLayout());
	},
	test: function () {
		console.log("Test");
	}
});



var HovedLayout = Marionette.Layout.extend({
	template: '#templ-layout'
});



HelloWorldApp.addInitializer(function(){
	new AppRouter();
	Backbone.history.start();
});



