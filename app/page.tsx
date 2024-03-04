'use client'
import {useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import {Hero} from '@/components/hero'

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  })
  return (
    <main>
      <Hero />
    </main>
  )
}
