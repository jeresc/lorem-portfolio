'use client'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React, {useRef} from 'react'
import {DisplayText} from './display-text'

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({
        delay: 3.2,
        defaults: {duration: 1, ease: 'power2.out'},
      })
      tl.from('.hero-title', {y: '+=100%', stagger: 0.01})
        .from('.circle', {scale: 0.4, opacity: 0}, 0)
        .from('p', {opacity: 0, y: '+=60%'}, '.4')

      const vanish = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: '0 start',
          end: '27% start',
        },
        ease: 'power2.in',
      })

      vanish.to('header', {opacity: 0, y: '-=100px'}, 0)
    },
    {scope: container},
  )
  return (
    <section className='mb-[-100vh] py-0' ref={container}>
      <div className='section-padding sticky top-0 flex h-svh items-end sm:items-center'>
        <svg
          width='1186'
          height='1186'
          viewBox='0 0 1186 1186'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='circle pointer-events-none absolute left-1/2 top-1/2 z-0 w-5/6 sm:w-3/5 lg:w-2/5'
          style={{
            opacity: 1,
            transform: 'translateX(-50%) translateY(-50%) scale(1)',
          }}
        >
          <circle
            cx='593'
            cy='593'
            r='593'
            fill='url(#paint0_linear_4949_267)'
          ></circle>
          <defs>
            <linearGradient
              id='paint0_linear_4949_267'
              x1='593'
              y1='0'
              x2='593'
              y2='1186'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#DDDDD5'></stop>
              <stop offset='1' stopColor='#DDDDD5' stopOpacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className='relative z-10 w-full'>
          <header className='flex flex-col items-start gap-y-3 sm:mb-0 sm:items-center sm:gap-y-8'>
            <h1 className='sr-only'>Hi there, I&aposm Lorem Ipsum</h1>
            <h1
              aria-hidden='true'
              className='xs:text-h2 leading-tighter relative flex w-full flex-col whitespace-nowrap text-h2 font-bold uppercase text-secondary-300  duration-500 sm:text-display-0'
            >
              <span
                id='title-line'
                className='4xl:pl-[21%] sm:pl-[13%] 2xl:pl-[16%]'
              >
                <DisplayText text="Hi there, I'm" id='hero-title' />
              </span>
              <span
                id='title-line'
                className='4xl:pr-[21%] sm:pr-[13%] sm:text-right 2xl:pr-[16%]'
              >
                <DisplayText text='Lorem Ipsum' id='hero-title' />
              </span>
            </h1>
            <p className='max-w-[38ch] pl-1 text-start text-base font-medium text-secondary-100 sm:pl-0 sm:text-center xl:text-h6 2xl:text-h5'>
              A freelance frontend developer & web designer propelling startup
              visions to reality.
            </p>
          </header>
        </div>
      </div>
      <div className='h-svh'></div>
    </section>
  )
}
