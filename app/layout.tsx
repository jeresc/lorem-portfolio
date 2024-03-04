import type {Metadata} from 'next'
import local from 'next/font/local'
import './globals.css'
import {Preloader} from '@/components/preloader'

const overusedGrotesk = local({
  src: '../fonts/OverusedGrotesk-VF.woff2',
  variable: '--font-overused-grotesk',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Lorem Portfolio',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body className={`${overusedGrotesk.variable} font-overused-grotesk`}>
        <svg className='pointer-events-none absolute cursor-none'>
          <filter id='grainy'>
            <feTurbulence type='turbulence' baseFrequency='0.5'></feTurbulence>
            <feColorMatrix type='saturate' values='0'></feColorMatrix>
          </filter>
        </svg>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
