// eslint-disable-next-line require-jsdoc
import {$} from '@core/dom';

export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map( (Component) => {
      const $ep = $.create('div', Component.className);
      const component = new Component($ep);
      $ep.html(component.toHTML());
      $root.append($ep);
      return component;
    });
    return $root;
  }
  render() {
    // this.$el.insertAdjacentElement('afterbegin','');
    this.$el.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }
}
