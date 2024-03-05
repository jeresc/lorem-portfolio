'use client'

import {useSidebarStore} from '@/store/sidebar'
import {cn} from '@/utils/cn'

interface SidebarButtonProps {
  hidden?: boolean
}

export function SidebarButton({hidden = false}: SidebarButtonProps) {
  const [isSidebarOpen, toggleSidebar] = useSidebarStore((state) => [
    state.open,
    state.toggle,
  ])
  return (
    <button
      aria-label='Menu Navigation Button'
      aria-expanded={isSidebarOpen}
      aria-controls='menu'
      className={cn(
        'group fixed left-6 top-6 z-[990] flex h-16 w-16 flex-col items-center justify-center rounded-full bg-accent-500 transition-all duration-1000 ease-expo hover:scale-90 sm:left-8 sm:top-8 2xl:h-20 2xl:w-20',
        hidden ? 'scale-0' : 'scale-100',
      )}
      onClick={() => toggleSidebar()}
    >
      <span
        className={cn(
          'ease-in-out-circ absolute h-[2px] w-7 rounded-full bg-secondary-400 transition-all  duration-300 2xl:w-9',
          isSidebarOpen ? '-translate-y-1 rotate-0' : 'translate-y-0 rotate-45',
        )}
      ></span>
      <span
        className={cn(
          'ease-in-out-circ absolute h-[2px] w-7 translate-y-1 rotate-0 rounded-full bg-secondary-400  transition-all duration-300 2xl:w-9',
          isSidebarOpen ? 'translate-y-1 rotate-0' : 'translate-y-0 -rotate-45',
        )}
      ></span>
    </button>
  )
}
