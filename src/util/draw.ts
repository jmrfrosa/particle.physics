import { Particle } from "../models/Particle.js"
import { Vector } from "../models/Vector.js"

export const drawParticle = (particle: Particle, ctx: CanvasRenderingContext2D) => {
  const velocityVector = Vector.add(particle.position, particle.velocity)

  drawCircle(particle.position, particle.radius, ctx)
  drawLine(particle.position, velocityVector, ctx)
}

export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

const drawLine = (start: Vector, end: Vector, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.lineWidth = 2
  ctx.strokeStyle = '#000000'
  ctx.stroke()
  ctx.closePath()
}

const drawCircle = (position: Vector, radius: number, ctx: CanvasRenderingContext2D) => {
  const { x, y } = position
  
  ctx.moveTo(x, y)
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = 'orange'
  ctx.fill()
  ctx.lineWidth = 2
  ctx.closePath()
}
