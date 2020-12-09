import {DomListener} from '@core/DomListener';

// eslint-disable-next-line require-jsdoc
export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }
  // Возвращает-шаблон-компонента
  toHTML() {
    return '';
  }
  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
