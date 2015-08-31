import Marionette from 'marionette'
import controller from './controller'

const routerConfig = {
  'controller': controller,
  'appRoutes': {
    '': 'home'
  }
};

export default Marionette.AppRouter.extend({
  'controller': controller,
  'appRoutes': {
    '': 'home'
  }
});