import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.uncubscribes = [];
    this.prepare();
    // this.storeSub = null;
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
  $dispatch(actions) {
    this.store.dispatch(actions);
  }
  storeChanged() {}
  // $subscribe(fn) {
  //   this.storeSub = this.store.subscribe(fn);
  // }
  isWatching(key) {
    return this.subscribe.includes(key);
  }
  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.uncubscribes.forEach((unsub) => unsub());
    // this.storeSub.unsubscribe();
  }
}
