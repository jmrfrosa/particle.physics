import { computeGravity } from "../util/forces.js";
export const attractor = (particles, particle) => {
    const gravityForce = computeGravity(particle, particles);
    particle.applyForce(gravityForce);
};
//# sourceMappingURL=attractor.js.map