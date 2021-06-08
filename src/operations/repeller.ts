import { Particle } from "../models/Particle.js";
import { Vector } from "../models/Vector.js";
import { computeGravity } from "../util/forces.js";

export const repeller = (particles: Particle[], particle: Particle) => {
  let repellerForce = computeGravity(particle, particles)
  repellerForce = Vector.multiply(repellerForce, -1)

  particle.applyForce(repellerForce)
}
