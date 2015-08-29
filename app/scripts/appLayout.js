import Marionette from 'marionette';
import layoutTemplate from 'templates/appLayout';
import NavLayout from 'layouts/nav';

export default class AppLayout extends Marionette.LayoutView {
    constructor() {
        super({
            'el': '#appContainer',
            'regions': {
                'nav': '#navContainer',
                'main': '#mainContainer'
            },
            'template': layoutTemplate            
        });
    }
    onRender() {
        console.log("app rendered");
        this.showChildView('nav', new NavLayout());        
    }
}

// var AppLayout = Marionette.LayoutView.extend({
//     template: layoutTemplate,
//     regions: {
//         'nav': '#navContainer'
//     },
//     onBeforeShow: function() {
        
//     },
//     onRender: function() {
//         console.log("app rendered");
//         this.showChildView('nav', new NavLayout());
//     }
// });

// export default AppLayout;
