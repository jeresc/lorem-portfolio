'use client'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef} from 'react'

export function Preloader() {
  const preloader = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'power2.inOut',
        },
        onComplete: () => {
          document.body.classList.remove('overflow-hidden')
          if (localStorage.getItem('preloader') === null) window.scrollTo(0, 0)
          else localStorage.setItem('preloader', Date.now().toString())
        },
        onStart: () => {
          document.body.classList.add('overflow-hidden')
        },
      })

      tl.to('span', {y: 0, stagger: 0.2, duration: 1})
        .to(preloader.current, {y: '-=100%', ease: 'power4.in'}, '+=0.5')
        .to('span', {y: -60, stagger: 0.1}, '<')
    },
    {scope: preloader},
  )

  return (
    <section
      className='3xl:text-h1 fixed z-[999] h-svh w-screen bg-secondary-400 text-h4 font-bold leading-[115%] tracking-heading text-accent-300 lg:text-h3 2xl:text-h2'
      ref={preloader}
    >
      <div className='flex h-full flex-col items-center justify-center'>
        <p className='overflow-hidden'>
          <span className='flex translate-y-[40px]'>Lorem Ipsum</span>
        </p>
        <p className='overflow-hidden text-accent-500'>
          <span className='flex translate-y-[40px]'>
            © Folio {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </section>
  )
}
