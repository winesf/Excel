// eslint-disable-next-line require-jsdoc
import {$} from '@core/dom';
import {Emitter} from '@core/Emitter';
import {StoreSubscriber} from '@core/StoreSubscriber';
import {updateDate} from '@/redux/action';

export class Excel {
  constructor(options) {
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
    this.subscriber = new StoreSubscriber(this.store);
  }
  getRoot() {
    const $root = $.create('div', 'excel');
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };
    this.components = this.components.map( (Component) => {
      const $ep = $.create( 'div', Component.className);
      const component = new Component($ep, componentOptions);
      $ep.html(component.toHTML());
      $root.append($ep);
      return component;
    });
    return $root;
  }
  init() {
    this.store.dispatch(updateDate());
    this.subscriber.subscribeComponents(this.components);

    this.components.forEach((component) => component.init());
  }
  destroy() {
    this.subscriber.unsubsccribeFromStore();
    this.components.forEach((component) => component.destroy());
  }
}
