import { Vector } from "../models/Vector.js";
import { computeGravity } from "../util/forces.js";
export const repeller = (particles, particle) => {
    let repellerForce = computeGravity(particle, particles);
    repellerForce = Vector.multiply(repellerForce, -1);
    particle.applyForce(repellerForce);
};
//# sourceMappingURL=repeller.js.map