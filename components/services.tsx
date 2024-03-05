'use client'

import React, {useRef} from 'react'
import {DisplayText} from './display-text'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Hexagon, Star, Triangle} from '@/assets/svg/shapes'

export function Services() {
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

    tl.from('.services-title', {
      y: '+=100%',
      stagger: 0.01,
      duration: 0.75,
    }).from('.services-description', {y: '+=100%', stagger: 0.001}, '<')
  })

  return (
    <section
      id='services'
      className='section-padding bg-secondary-400'
      ref={container}
    >
      <div className='flex w-full flex-col gap-x-20 gap-y-2 lg:grid lg:grid-cols-12 xl:gap-y-3  2xl:gap-y-4 '>
        <h2 className='section-heading col-span-6 text-accent-400'>
          <DisplayText
            text='What I Do.'
            id='services-title'
            defaults={false}
            className='sm:pb-2'
          />
        </h2>
        <p className=' sr-only'>
          My obsession is to deliver a digital experience that not only serves a
          great purpose, but give your business an unfair advantage.
        </p>
        <p className='body-text col-span-12 max-w-[40ch] text-balance pl-1 font-medium text-secondary-50 lg:col-span-5 '>
          <DisplayText
            text='My obsession is to deliver a digital experience that not only serves a great purpose, but give your business an unfair advantage.'
            id='services-description'
            defaults={false}
            className='pb-0 sm:pb-0'
          />
        </p>
      </div>
      <div className='mt-12 w-full'>
        <div className='mt-12 flex flex-col justify-between gap-y-16'>
          <div
            className='sticky top-0 border-t border-t-secondary-300 bg-secondary-400 px-2 '
            style={{top: 'calc(20vh + 0vh)', marginBottom: '24vh'}}
          >
            <div className='flex items-center gap-x-4 md:gap-x-6'>
              {/* <img */}
              {/*   alt='' */}
              {/*   loading='lazy' */}
              {/*   width='32' */}
              {/*   height='32' */}
              {/*   decoding='async' */}
              {/*   data-nimg='1' */}
              {/*   className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' */}
              {/*   style='color:transparent' */}
              {/*   src='//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg' */}
              {/* /> */}
              <Star />
              <h3 className='3xl:py-9 py-7 text-left text-h4 font-bold text-accent-500  sm:py-5 sm:text-h3 md:py-4 md:text-h2  lg:text-h1 '>
                Web Development
              </h3>
            </div>
            <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
              <p className=' col-span-12 max-w-[40ch] pt-2 text-base font-medium text-secondary-75 md:text-h6 lg:col-span-6 2xl:text-h5'>
                I create unique, custom-coded websites that are tailored to your
                brand. I focus on scalability, performance, accessibility, and
                engaging animations for a memorable experience.
              </p>
              <div className='col-span-6 flex w-full flex-col gap-y-4 pt-8 text-h5 md:text-h4 lg:pt-0 2xl:text-h3'>
                <span className='font-bold text-accent-500'>
                  CMS Integration
                </span>
                <span className='font-bold text-accent-500'>
                  Motion &amp; Animations
                </span>
                <span className='font-bold text-accent-500'>
                  3D Development
                </span>
              </div>
              <span className='leading-tighter absolute  bottom-0 -z-10  flex w-full items-end  justify-end text-number font-extrabold text-secondary-300 opacity-30 '>
                01.
              </span>
            </div>
          </div>
          <div
            className='sticky top-0 border-t border-t-secondary-300 bg-secondary-400 px-2 '
            style={{top: 'calc(20vh + 8vh)', marginBottom: '16vh'}}
          >
            <div className='flex items-center gap-x-4 md:gap-x-6'>
              {/* <img */}
              {/*   alt='' */}
              {/*   loading='lazy' */}
              {/*   width='32' */}
              {/*   height='32' */}
              {/*   decoding='async' */}
              {/*   data-nimg='1' */}
              {/*   className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' */}
              {/*   style='color:transparent' */}
              {/*   src='//images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg' */}
              {/* /> */}
              <Hexagon />
              <h3 className='3xl:py-9 py-7 text-left text-h4 font-bold text-accent-500  sm:py-5 sm:text-h3 md:py-4 md:text-h2  lg:text-h1 '>
                Web Design
              </h3>
            </div>
            <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
              <p className=' col-span-12 max-w-[40ch] pt-2 text-base font-medium text-secondary-75 md:text-h6 lg:col-span-6 2xl:text-h5'>
                I design user-centric websites that enhance your brand and drive
                business goals. Clean typography and minimal layouts has my full
                attention to create a compelling online presence.
              </p>
              <div className='col-span-6 flex w-full flex-col gap-y-4 pt-8 text-h5 md:text-h4 lg:pt-0 2xl:text-h3'>
                <span className='font-bold text-accent-500'>
                  Responsive Design
                </span>
                <span className='font-bold text-accent-500'>Wireframing</span>
                <span className='font-bold text-accent-500'>UX Writing</span>
              </div>
              <span className='leading-tighter absolute  bottom-0 -z-10  flex w-full items-end  justify-end text-number font-extrabold text-secondary-300 opacity-30 '>
                02.
              </span>
            </div>
          </div>
          <div
            className='sticky top-0 border-t border-t-secondary-300 bg-secondary-400 px-2 '
            style={{top: 'calc(20vh + 16vh)', marginBottom: '8vh'}}
          >
            <div className='flex items-center gap-x-4 md:gap-x-6'>
              <Triangle />
              {/* <img */}
              {/*   alt='' */}
              {/*   loading='lazy' */}
              {/*   width='32' */}
              {/*   height='32' */}
              {/*   decoding='async' */}
              {/*   data-nimg='1' */}
              {/*   className='h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8' */}
              {/*   style='color:transparent' */}
              {/*   src='//images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg' */}
              {/* /> */}
              <h3 className='3xl:py-9 py-7 text-left text-h4 font-bold text-accent-500  sm:py-5 sm:text-h3 md:py-4 md:text-h2  lg:text-h1 '>
                SEO
              </h3>
            </div>
            <div className='relative flex min-h-[20vh] flex-col place-items-start gap-x-20 pb-12 lg:grid lg:grid-cols-12 '>
              <p className=' col-span-12 max-w-[40ch] pt-2 text-base font-medium text-secondary-75 md:text-h6 lg:col-span-6 2xl:text-h5'>
                Beyond crafting visually memorable websites, I also optimize
                your online presence to elevate your visibility in search
                rankings so your voices can be heard in the digital landscape.
              </p>
              <div className='col-span-6 flex w-full flex-col gap-y-4 pt-8 text-h5 md:text-h4 lg:pt-0 2xl:text-h3'>
                <span className='font-bold text-accent-500'>Technical SEO</span>
                <span className='font-bold text-accent-500'>
                  On-Page Optimization
                </span>
                <span className='font-bold text-accent-500'>
                  SEO Audits &amp; Analysis
                </span>
              </div>
              <span className='leading-tighter absolute  bottom-0 -z-10  flex w-full items-end  justify-end text-number font-extrabold text-secondary-300 opacity-30 '>
                03.{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
