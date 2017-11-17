export default class Vector {

  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  scale(s: number): Vector {
    return new Vector(this.x * s, this.y * s, this.z * s);
  }

  get magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  get normalized(): Vector {
    return this.scale(this.magnitude);
  }

}
