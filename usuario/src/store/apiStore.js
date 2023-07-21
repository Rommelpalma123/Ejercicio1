import { create } from 'zustand'

export const useStore = create((set) => ({
  width: "",
  height: "",
  imageData: null,
  fetchImageData: async (width, height) => {
    try {
      const response = await fetch(`https://picsum.photos/${width}/${height}`)
      const data = await response.blob()
      set({ width, height, imageData: URL.createObjectURL(data) })
    } catch (error) {
      console.error("Error fetching image data:", error)
    }
  }
}))