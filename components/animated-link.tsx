import Link from 'next/link'
import React from 'react'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
}

export function AnimatedLink({href, children}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className='link-text leading-base group relative block h-fit overflow-hidden font-medium'
    >
      <span className='flex transition-all duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-[2rem]'>
        {children}
      </span>
      <span className='transtion-all absolute inset-0 translate-y-[2rem] duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0'>
        {children}
      </span>
    </Link>
  )
}
