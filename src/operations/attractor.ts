import { Particle } from "../models/Particle.js";
import { computeGravity } from "../util/forces.js";

export const attractor = (particles: Particle[], particle: Particle) => {
  const gravityForce = computeGravity(particle, particles)

  particle.applyForce(gravityForce)
}
