'use client'
import {AboutMe} from '@/components/about-me'
import {Hero} from '@/components/hero'
import {Services} from '@/components/services'
import {SidebarButton} from '@/components/sidebar-button'
import Lenis from '@studio-freight/lenis'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'

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
      <SidebarButton hidden={true} />
      <Hero />
      <div className='overflow-x-clip" relative z-20 min-h-screen w-full'>
        <AboutMe />
        <Services />
      </div>
    </main>
  )
}
