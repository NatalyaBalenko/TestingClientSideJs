requirejs.config({
    paths: {
        'jquery': '../lib/jQuery',
    }
});

define(['myApp', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});