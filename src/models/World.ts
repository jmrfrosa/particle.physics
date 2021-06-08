import { clearCanvas, drawParticle } from "../util/draw.js"
import { computeCollisions, computeGravity } from "../util/forces.js"
import { Particle } from "./Particle.js"
import { Vector } from "./Vector.js"

export class World {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  particles: Particle[]
  bounds: { max: Vector, min: Vector }

  static FRAMERATE = 40

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")
    this.particles = []
    this.bounds = { max: new Vector(canvas.width, canvas.height), min: new Vector(0, 0) }
  }

  run() {
    setInterval(this.update.bind(this), World.FRAMERATE)
  }

  update() {
    for (const particle of this.particles) {
      // const gravityForce = computeGravity(particle, this.particles)
      // const collisionForce = computeCollisions(particle, this.particles)
      // particle.applyForce(gravityForce)
      // particle.applyForce(collisionForce)

      particle.runRules(this.particles)

      particle.velocity = Vector.add(particle.velocity, particle.acceleration)
      particle.position = Vector.add(particle.position, particle.velocity)
      particle.acceleration = Vector.multiply(particle.acceleration, 0)
    
      this.checkBounds(particle)
    
      clearCanvas(this.context)
      window.requestAnimationFrame(() => drawParticle(particle, this.context))
    }
  }

  checkBounds(particle: Particle) {
    ['x', 'y'].forEach(coord => {
      if (particle.position[coord] < particle.radius) {
        particle.velocity[coord] *= -0.9
        particle.position[coord] = particle.radius
      }
  
      if (particle.position[coord] > (this.bounds.max[coord] - particle.radius)) {
        particle.velocity[coord] *= -0.9
        particle.position[coord] = this.bounds.max[coord] - particle.radius
      }
    })
  }
}
