import {DomListener} from '@core/DomListener';

// eslint-disable-next-line require-jsdoc
export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.uncubscribes = [];
    this.prepare();
  }
  prepare() { }
  toHTML() {
    return '';
  }
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.uncubscribes.push(unsub);
  }
  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.uncubscribes.forEach((unsub) => unsub());
  }
}
