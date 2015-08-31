import Marionette from 'marionette';
import layoutTemplate from './layout-template';
//import NavLayout from 'layouts/nav';

export default Marionette.LayoutView.extend({
    el: '.application',
    template: layoutTemplate,
    regions: {
        nav: '#navContainer',
        main: '#mainContainer'
    },
    onRender() {
        console.log("layout view rendered");
    }
});