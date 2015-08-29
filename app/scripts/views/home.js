import Marionette from 'marionette'
import homeTemplate from 'templates/home'

export default class HomeView extends Marionette.LayoutView {
  constructor() {
    super({
      'template': homeTemplate
    })
  }
}