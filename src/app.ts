import { Particle } from "./models/Particle.js";
import { Vector } from "./models/Vector.js";
import { World } from "./models/World.js";
import { Operation } from "./operations/Rule.js";

console.log('RUNNING!')

let particles: Particle[] = [
  new Particle({ x: 200, y: 150, radius: 20 }),
  new Particle({ x: 120, y: 300, radius: 30 }),
  new Particle({ x: 500, y: 500, radius: 15 }),
  new Particle({ x: 8, y: 77, radius: 10 })
]

particles[0].velocity = new Vector(1, 2)
particles[1].velocity = new Vector(7, -3)
particles[2].velocity = new Vector(1, 1)
particles[3].velocity = new Vector(5, 5)

particles[0].setType(Operation.Attractor)
particles[1].setType(Operation.Attractor)
particles[2].setType(Operation.Repeller)
particles[3].setType(Operation.Repeller)

const canvas = document.getElementById('board') as HTMLCanvasElement

const world = new World(canvas)
world.particles = particles

world.run()
