'use client'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React, {useRef} from 'react'
import {DisplayText} from './display-text'

export function Works() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      defaults: {duration: 0.75, ease: 'power2.out'},
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    })

    tl.from('.works-title', {
      y: '+=100%',
      stagger: 0.01,
      duration: 0.75,
    })
  })

  return (
    <section
      className='section-padding rounded-b-3xl bg-secondary-400'
      id='works'
      ref={container}
    >
      <h2 className=' section-heading relative  pb-8 text-accent-400 dark:text-accent-400'>
        <span aria-hidden='true'>
          <DisplayText
            text='Selected Works.'
            className='sm:pb-2'
            id='works-title'
            defaults={false}
          />
        </span>
        <span className='sr-only'>Selected Works</span>
      </h2>
    </section>
  )
}
