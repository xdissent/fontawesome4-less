Package.describe({
    summary: "Font Awesome 4's LESS sources. Using this package will allow you reuse mixins and variables. As default, import '/packages/font-awesome-4-less/font-awesome.lessimport'"
});

Package.on_use(function(api){
	api.use('less','client');
});

Package.on_test(function(api){
});