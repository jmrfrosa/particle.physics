export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static subtract(v1, v2) {
        return new Vector(v2.x - v1.x, v2.y - v1.y);
    }
    static multiply(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }
    static divide(vector, scalar) {
        return new Vector(vector.x / scalar, vector.y / scalar);
    }
    static normalize(vector) {
        return new Vector(vector.x / vector.magnitude(), vector.y / vector.magnitude());
    }
    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    magnitude() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }
    distanceTo(vector) {
        const diff = Vector.subtract(vector, this);
        return diff.magnitude();
    }
}
//# sourceMappingURL=Vector.js.map