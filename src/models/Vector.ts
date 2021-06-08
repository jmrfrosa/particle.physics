export class Vector {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  
  static add(v1: Vector, v2: Vector) {
    return new Vector(
      v1.x + v2.x,
      v1.y + v2.y
    )
  }
  
  static subtract(v1: Vector, v2: Vector) {
    return new Vector(
      v2.x - v1.x,
      v2.y - v1.y
    )
  }
  
  static multiply(vector: Vector, scalar: number) {
    return new Vector(
      vector.x * scalar,
      vector.y * scalar
    )
  }
  
  static divide(vector: Vector, scalar: number) {
    return new Vector(
      vector.x / scalar,
      vector.y / scalar
    )
  }

  static normalize(vector: Vector) {
    return new Vector(
      vector.x / vector.magnitude(),
      vector.y / vector.magnitude()
    )
  }

  static dot(v1: Vector, v2: Vector) {
    return v1.x * v2.x + v1.y * v2.y
  }

  magnitude() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2))
  }

  distanceTo(vector: Vector) {
    const diff = Vector.subtract(vector, this)

    return diff.magnitude()
  }
}
