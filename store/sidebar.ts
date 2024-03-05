import {create} from 'zustand'

interface SidebarState {
  open: boolean
  toggle: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  toggle: () => set((state) => ({open: !state.open})),
}))
