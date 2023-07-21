import { useStore } from '../store/apiStore'
export const ApiImages = () => {

  const imageData = useStore((state) => state.imageData)
  const fetchImageData = useStore((state) => state.fetchImageData)

  const handleClick = async () => {
    await fetchImageData()
  }

  const inputs = {
    display: "grid",
    gap: "12px",
    alignItems: "center"
  }

  const container = {
    marginLeft: "800px",
    marginTop: "-300px"
  }
  return (
    <div style={container}>
      <div style={inputs}>
        <label htmlFor=''>Hancho</label>
        <input type='number' />
        <label htmlFor=''>Alto</label>
        <input type='number' />
        <button>Generar Imagen</button>
      </div>
    </div>
  )
}
