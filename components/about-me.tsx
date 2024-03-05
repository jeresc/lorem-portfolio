'use client'

import {useGSAP} from '@gsap/react'
import Headshot from '@/assets/imgs/headshot.jpg'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React, {useRef} from 'react'
import {DisplayText} from './display-text'
import Image from 'next/image'

export function AboutMe() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tlTitle = gsap.timeline({
      defaults: {duration: 0.5, ease: 'power2.out'},
      scrollTrigger: {
        trigger: container.current,
        start: 'top 65%',
      },
    })
    tlTitle.from('.about-title', {y: '+=100%', stagger: 0.02, duration: 0.75})

    const tlDescription = gsap.timeline({
      defaults: {duration: 0.5, ease: 'power2.out'},
      scrollTrigger: {
        trigger: '.about-description',
        start: 'top 90%',
      },
    })
    tlDescription.from('.about-description', {
      y: '+=100%',
      stagger: 0.001,
    })

    gsap.to('.image-container', {
      y: '+=60px',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    })
  })

  return (
    <section
      className='section-padding rounded-t-3xl bg-secondary-400'
      id='about'
      ref={container}
    >
      <div className='relative'>
        <h2 className='section-heading relative z-30 -mb-5 text-accent-400 md:-mb-20 dark:text-accent-400'>
          <span aria-hidden='true'>
            <span className=' inline-block'>
              <DisplayText
                text='About Me.'
                className='sm:pb-2'
                id='about-title'
                defaults={false}
              />
            </span>
          </span>
        </h2>
        <svg
          className='3xl:max-w-5xl absolute left-1/2 top-1/2 mt-16 hidden w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 opacity-10 sm:block xl:mt-20 2xl:mt-28 2xl:max-w-4xl'
          viewBox='0 0 709 300'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='709' height='300' rx='169.963' fill='#AFAF9D'></rect>
        </svg>
        <svg
          className='3xl:max-w-4xl absolute left-1/2 top-1/2 mt-16 hidden w-full max-w-xl -translate-x-1/2 -translate-y-1/2 opacity-10 sm:block xl:mt-20 2xl:mt-28 2xl:max-w-3xl'
          viewBox='0 0 594 209'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='594'
            y='209'
            width='594'
            height='209'
            rx='126.5'
            transform='rotate(-180 594 209)'
            fill='#E8E8E3'
          ></rect>
        </svg>
        <div className='3xl:max-w-xl image-container pointer-events-none relative z-0 mx-auto max-h-[480px] max-w-sm overflow-hidden md:max-h-[480px]  2xl:max-w-lg'>
          <Image
            src={Headshot.src}
            alt='Headshot of Lorem Ipsum wearing a brown jacket, white tshirt and black pants'
            width={532}
            height={480}
            style={{objectFit: 'cover', objectPosition: 'bottom'}}
            className='mx-auto aspect-square rounded object-cover object-bottom sm:aspect-auto 2xl:rounded-2xl'
          />
          <div className='absolute top-0 h-full w-full rounded bg-gradient-to-t from-secondary-400 to-transparent opacity-80 xl:opacity-75 2xl:rounded-2xl'></div>
        </div>
      </div>
      <p className=' sr-only'>
        Empowering all-scale startups with custom web experiences that are
        memorable and drive success. With a passion for design and development,
        I take projects from ideation to launch, ensuring a seamless journey
        that leaves a lasting impact in the digital landscape.
      </p>
      <p className='body-text relative -mt-8 flex w-full items-end justify-end font-medium text-secondary-50 sm:-mt-12'>
        <span className='max-w-[44ch]' aria-hidden='true'>
          <DisplayText
            text='            Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development,I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.'
            className='pb-0 sm:pb-0'
            id='about-description'
            defaults={false}
          />
        </span>
      </p>
    </section>
  )
}
