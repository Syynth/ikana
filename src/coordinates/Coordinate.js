// @flow

import type { Vector } from '../core';

export default class Coordinate {

  constructor() {
    if (this.prototype === Coordinate) {
      throw new Error('Cannot instantiate abstract class Coordinate directly');
    }
  }

  toWorld(): Vector {
    throw new Error('Method toWorld has not been implemented for this subclass of Coordinate');
  }

}
