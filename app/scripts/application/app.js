import Backbone from 'backbone';
import {Application} from 'marionette';
import LayoutView from './layout-view';
import Router from './router';

console.log("loaded app.js");

export default Application.extend({
    initialize() {

    },

    onStart() {
        console.log("app started");
        //this.$body = $(document.body);
        this.layout = new LayoutView();
        this.layout.render();
        this.router = new Router();
        Backbone.history.start();        
    }
});

// var App = new Marionette.Application({


// });

// App.on('start', function() {
//   'use strict';
//   console.log("started app");
//   App.rootLayout = new AppLayout();
//   App.rootLayout.render();
//   App.router = new Router();
//   Backbone.history.start();
// });

// App.start();

// export default App;
//export default App
