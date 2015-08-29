import Marionette from 'marionette'
import controller from 'core/controller'

const routerConfig = {
  'controller': controller,
  'appRoutes': {
    '': 'home'
  }
};

export default class Router extends Marionette.AppRouter {
  constructor() {
    super(routerConfig);
  }
}