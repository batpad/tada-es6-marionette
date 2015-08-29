import Marionette from 'marionette';
import layoutTemplate from 'templates/navLayout';

const superParams = {
  'template': layoutTemplate
};

export default class NavLayout extends Marionette.LayoutView {
  constructor(...args) {
    super(superParams);
  }

  onRender() {
    console.log("nav rendered");
  }
}
