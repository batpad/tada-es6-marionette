import Backbone from 'backbone';
import Marionette from 'marionette';
import AppLayout from 'appLayout';
import Router from 'core/router';

console.log("loaded app.js");
var App = new Marionette.Application({

});

App.on('start', function() {
  'use strict';
  console.log("started app");
  App.rootLayout = new AppLayout();
  App.rootLayout.render();
  App.router = new Router();
  Backbone.history.start();
});

App.start();

export default App;
//export default App
