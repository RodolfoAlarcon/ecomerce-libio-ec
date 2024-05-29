import { create } from 'zustand'

export const useUIStore = create((set) => ({
    isSideMenuOpen: false,
    isSideMenuLateralOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
    openSideLateralMenu: () => set({ isSideMenuLateralOpen: true }),
    closeSideLateralMenu: () => set({ isSideMenuLateralOpen: false })
}));
