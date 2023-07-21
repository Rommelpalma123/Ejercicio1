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

export const useImageAutoUpdateStore = create((set) => ({
  imageData: null,
  fetchImageData: async () => {
    try {
      const response = await fetch("https://picsum.photos/200/300")
      const data = await response.blob()
      set({ imageData: URL.createObjectURL(data) })
    } catch (error) {
      console.error("Error fetching image data:", error)
    }
  }
}))

export const useImageTableStore = create((set) => ({
  images: [],
  fetchImages: async () => {
    try {
      const imagePromises = Array.from({ length: 10 }, () =>
        fetch("https://picsum.photos/200/300")
      )
      const responses = await Promise.all(imagePromises)
      const blobPromises = responses.map((response) => response.blob())
      const blobs = await Promise.all(blobPromises)
      const imageUrls = blobs.map((blob) => URL.createObjectURL(blob))
      set({ images: imageUrls })
    } catch (error) {
      console.error("Error fetching images:", error)
    }
  }
}))