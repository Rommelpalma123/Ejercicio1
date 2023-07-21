import { useEffect } from "react"
import { useImageAutoUpdateStore } from "../store/apiStore"

export const ApiImages = () => {
  const { imageData, fetchImageData } = useImageAutoUpdateStore()

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchImageData() 
    }, 5000) 

    return () => clearInterval(intervalId)
  }, [fetchImageData])

  const container = {
    marginLeft: "800px"
  }
return (
  <div style={container}>
    <div>Imagen Generada cada 5 segundos</div>
    {imageData && (
      <div>
        <img
          src={imageData}
          alt='Imagen'
        />
      </div>
    )}
  </div>
)}
