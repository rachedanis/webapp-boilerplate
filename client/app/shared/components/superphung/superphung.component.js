import template from './superphung.html'

export const SuperphungComponent = {
  template,
  controller: class {
    constructor() {
      console.log('init constructor');
    }
  }
}