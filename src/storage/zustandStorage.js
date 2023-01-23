import { create } from 'zustand'

const useZustand = create((set) => ({
  prominentLayout: false,
  setProminentLayout: () => set((state) => ({ prominentLayout: !state.prominentLayout })),
  
  
  //default values
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
export default useZustand