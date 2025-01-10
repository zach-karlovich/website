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
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 3
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.alpha = Math.random() * 0.075 + 0.01
        
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

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        this.alpha = Math.sin(Date.now() * 0.001) * 0.2 + 0.3
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.alpha})`)
        ctx.fill()

        ctx.shadowBlur = 25
        ctx.shadowColor = this.color
        
        particles.forEach(particle => {
          const dx = this.x - particle.x
          const dy = this.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 200) {
            ctx.beginPath()
            const opacity = (1 - distance/200) * this.alpha
            ctx.strokeStyle = this.color.replace(/[\d.]+\)$/g, `${opacity})`)
            ctx.lineWidth = 1.5
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(particle.x, particle.y)
            ctx.stroke()
          }
        })
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
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

