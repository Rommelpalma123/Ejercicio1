import { useStore, useImageTableStore } from "../store/apiStore"
import { useState, useEffect } from "react"

export const User = () => {
  const { width, height, imageData, fetchImageData } = useStore()
  const [imageGenerated, setImageGenerated] = useState(false)
  const { images, fetchImages } = useImageTableStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (width && height) {
      fetchImageData(parseInt(width), parseInt(height))
      setImageGenerated(true)
    }
  }

  useEffect(() => {
    fetchImages() // Llamar a fetchImages para obtener las imágenes
  }, [fetchImages])

  const inputs = {
    display: "grid",
    gap: "12px",
    alignItems: "center"
  }

  const container = {
    marginLeft: "800px"
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={container}
    >
      <div style={inputs}>
        <label htmlFor='width'>Ancho:</label>
        <input
          type='number'
          id='width'
          value={width}
          onChange={(e) => useStore.setState({ width: e.target.value })}
        />
        <label htmlFor='height'>Alto:</label>
        <input
          type='number'
          id='height'
          value={height}
          onChange={(e) => useStore.setState({ height: e.target.value })}
        />
        <button type='submit'>Generar Imagen</button>
      </div>
      <div>
        {imageGenerated && imageData && (
          <div>
            <p>
              Imagen generada con ancho: {width} y alto: {height}
            </p>
            <img
              src={imageData}
              alt='Imagen'
              width={width}
              height={height}
            />
          </div>
        )}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Imagenes</th>
            </tr>
          </thead>
          <tbody style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
            {images.map((imageUrl, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={imageUrl}
                    alt={`Imagen ${index}`}
                    width="50"
                    height="50"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  )
}
