import { Particle } from "../models/Particle.js";
import { attractor } from "./attractor.js";
import { repeller } from "./repeller.js";

export enum Operation {
  Attractor = 'attractor',
  Repeller = 'repeller'
}

export type Executable = (input: any, particle: Particle) => void

export class Rule {
  particle: Particle
  operation: Executable

  constructor(particle: Particle, operation: Operation) {
    this.particle = particle
    this.operation = this.getOperation(operation)
  }

  getOperation(operation: Operation): Executable {
    switch (operation) {
      case Operation.Attractor:
        return attractor
      case Operation.Repeller:
        return repeller
    }
  }

  execute(input: unknown) {
    this.operation(input, this.particle)
  }
}
