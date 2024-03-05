'use client'
import {useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import {Hero} from '@/components/hero'
import {SidebarButton} from '@/components/sidebar-button'

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
      <SidebarButton hidden={false} />
      <Hero />
      <div className='overflow-x-clip" relative z-20 min-h-screen w-full'>
        <section className='section-padding min-h-screen rounded-t-3xl bg-secondary-400'></section>
      </div>
    </main>
  )
}
