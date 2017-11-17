// @flow
import Coordinate from './Coordinate';

export class CartesianCoordinate extends Coordinate {

  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }

}
