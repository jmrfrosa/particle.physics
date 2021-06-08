import { Vector } from '../models/Vector.js';
export const G = 0.4;
export const computeGravity = (particle, particleList) => {
    particleList = particleList.filter(p => p !== particle);
    let finalForce = new Vector(0, 0);
    for (const neighbour of particleList) {
        const differenceVector = Vector.subtract(neighbour.position, particle.position);
        const directionVector = Vector.normalize(differenceVector);
        const distance = differenceVector.magnitude();
        const forceStrength = -(G * particle.mass * neighbour.mass) / (distance ** 2);
        const force = Vector.multiply(directionVector, forceStrength);
        finalForce = Vector.add(finalForce, force);
    }
    return finalForce;
};
export const computeCollisions = (particle, particleList) => {
    particleList = particleList.filter(p => p !== particle);
    let finalForce = new Vector(0, 0);
    for (const neighbour of particleList) {
        if (inCollision(particle, neighbour)) {
            const differenceVector = Vector.subtract(neighbour.position, particle.position);
            const directionVector = Vector.normalize(differenceVector);
            const relativeVelocity = Vector.subtract(neighbour.velocity, particle.velocity);
            let forceStrength = 2 * Vector.dot(relativeVelocity, directionVector) / (particle.mass + neighbour.mass);
            const force = Vector.multiply(directionVector, forceStrength * neighbour.mass);
            finalForce = Vector.add(finalForce, force);
            // particle.velocity = new Vector(
            //   particle.velocity.x * Vector.normalize(relativeVelocity).x * directionVector.x,
            //   particle.velocity.y * Vector.normalize(relativeVelocity).y * directionVector.y
            // )
            // particle.velocity = Vector.add(
            //   particle.velocity,
            //   Vector.divide(force, particle.mass)
            // )
        }
    }
    return finalForce;
};
export const inCollision = (particle, neighbour) => {
    const radii = particle.radius + neighbour.radius;
    if (particle.position.distanceTo(neighbour.position) < radii) {
        return true;
    }
};
//# sourceMappingURL=forces.js.map