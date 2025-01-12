'use client'

import { useEffect, useRef } from 'react'

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 40

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      private canvas: HTMLCanvasElement
      private ctx: CanvasRenderingContext2D

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 5 + 3;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.alpha = Math.random() * 0.075 + 0.01;

        const nordColors = [
          'rgba(136, 192, 208, 0.05)',
          'rgba(143, 188, 187, 0.05)',
          'rgba(94, 129, 172, 0.05)',
          'rgba(180, 142, 173, 0.05)',
        ]
        this.color = nordColors[Math.floor(Math.random() * nordColors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1

        this.alpha = Math.sin(Date.now() * 0.001) * 0.2 + 0.3
      }

      draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.alpha})`)
        this.ctx.fill()

        this.ctx.shadowBlur = 25
        this.ctx.shadowColor = this.color

        particles.forEach(particle => {
          const dx = this.x - particle.x
          const dy = this.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            this.ctx.beginPath()
            const opacity = (1 - distance / 200) * this.alpha
            this.ctx.strokeStyle = this.color.replace(/[\d.]+\)$/g, `${opacity})`)
            this.ctx.lineWidth = 1.5
            this.ctx.moveTo(this.x, this.y)
            this.ctx.lineTo(particle.x, particle.y)
            this.ctx.stroke()
          }
        })
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas, ctx))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(26, 29, 35, 0.999)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    init()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: -1,
        backgroundColor: '#050607',
      }}
      suppressHydrationWarning
    />
  )
}

export default DynamicBackground

