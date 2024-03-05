'use client'

import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import React, {useRef} from 'react'
import {AnimatedLink} from './animated-link'

export function Header() {
  const header = useRef(null)

  useGSAP(
    () => {
      gsap.from(header.current, {
        opacity: 0,
        y: '-=30px',
        delay: 4,
        duration: 1,
        ease: 'power4.out',
      })
    },
    {scope: header},
  )

  return (
    <header className='absolute top-0 z-40 w-full' ref={header}>
      <nav className='mt-6 flex items-start justify-between border-opacity-20 px-4 pb-2 sm:px-7 xl:mt-8 xl:pb-4  2xl:mt-10 2xl:px-10 2xl:pb-6'>
        <div>
          <a aria-label='Back to Home' href='/'></a>
        </div>
        <div className=' flex items-start gap-x-20 text-start text-secondary-300'>
          <span className=' 3xl:text-h6 hidden text-xs font-semibold uppercase text-secondary-50 sm:flex 2xl:text-base'>
            Available for work March 2024
          </span>
          <div className='flex flex-col items-start gap-y-1'>
            <AnimatedLink href='/#about'>About</AnimatedLink>
            <AnimatedLink href='/#services'>Services</AnimatedLink>
            <AnimatedLink href='/#works'>Works</AnimatedLink>
            <AnimatedLink href='/#reviews'>Reviews</AnimatedLink>
            <AnimatedLink href='/contact'>Contact</AnimatedLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
