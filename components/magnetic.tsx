'use client'
import {gsap} from 'gsap'
import React, {useLayoutEffect, useRef} from 'react'

interface MagneticProps {
  children: React.ReactElement
}

export function Magnetic({children}: MagneticProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const xTo = gsap.quickTo(ref.current, 'x', {
      duration: 2,
      ease: 'elastic.out(1,0.4)',
    })
    const yTo = gsap.quickTo(ref.current, 'y', {
      duration: 2,
      ease: 'elastic.out(1,0.4)',
    })

    const mouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const {clientX, clientY} = e
      const {width, height, left, top} = ref.current?.getBoundingClientRect()
      let x = clientX - (left + width / 2)
      let y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    }
    const mouseLeeave = () => {
      if (!ref.current) return
      xTo(0)
      yTo(0)
    }

    if (!ref.current) return
    ref.current.addEventListener('mousemove', mouseMove)
    ref.current.addEventListener('mouseleave', mouseLeeave)

    return () => {
      if (!ref.current) return
      ref.current.removeEventListener('mousemove', mouseMove)
      ref.current.removeEventListener('mouseleave', mouseLeeave)
    }
  }, [])

  return React.cloneElement(children, {ref, className: 'box-content'})
}
