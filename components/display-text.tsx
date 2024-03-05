'use client'

import {cn} from '@/utils/cn'

interface DisplayTextProps {
  text: string
  id: string
  className?: string
  defaults?: boolean | true
}

export function DisplayText({text, className, id, defaults}: DisplayTextProps) {
  return (
    <span className='inline-block'>
      {text.split('').map((c, index) => {
        let i = `${id}-${index}`
        if (c === ' ')
          return (
            <span key={i} className='inline-block'>
              &nbsp;
            </span>
          )
        return (
          <span
            key={i}
            className={cn(
              'relative inline-flex overflow-hidden pb-1',
              defaults && 'sm:pb-3',
              className,
            )}
          >
            <span className={id}>{c}</span>
          </span>
        )
      })}
    </span>
  )
}
