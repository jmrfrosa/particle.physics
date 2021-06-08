import { Rule } from '../operations/Rule.js';
import { Vector } from './Vector.js';
export class Particle {
    constructor({ x, y, radius }) {
        this.position = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
        this.mass = Math.PI * radius ** 2;
        this.radius = radius;
        this.ruleset = [];
    }
    applyForce(force) {
        // if(force.x !== 0 || force.y !== 0) {
        //   console.log(`Before: ${this.acceleration.x}, ${this.acceleration.y}`)
        // }
        const fAcceleration = Vector.divide(force, this.mass);
        this.acceleration = Vector.add(this.acceleration, fAcceleration);
        // if(force.x !== 0 || force.y !== 0) {
        //   console.log(force)
        //   console.log(`After: ${this.acceleration.x}, ${this.acceleration.y}`)
        // }
    }
    runRules(input) {
        this.ruleset.reduce((result, rule) => {
            return rule.execute(result);
        }, input);
    }
    setType(type) {
        const rule = new Rule(this, type);
        this.ruleset.push(rule);
    }
}
//# sourceMappingURL=Particle.js.map