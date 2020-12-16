export class Page {
  constructor(params) {
    this.params = params;
  }
  getRoot() {
    throw new Error('Method get rooot should be implemented');
  }
  afterRender() {}
  destroy() {}
}
