FaceApp.module("Router", function(Router, FaceApp, Backbone, Marionette, $, _){


	var AppRouter = Backbone.Marionette.AppRouter.extend({
		/* standard routes can be mixed with appRoutes/Controllers above */
		appRoutes : {
			"" : "index",
			"test/:arg1/:arg2": "test"
		}
	});


	
	FaceApp.addInitializer(function(){
		FaceApp.router = new AppRouter({
			controller: FaceApp.Controller
		});
	});

});