import { Routes, Route } from "react-router-dom"
import { User } from './pages/User'
import { ApiImages } from './pages/ApiImages'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path=''
          element={<User />}
        />
        <Route
          path='/api'
          element={<ApiImages />}
        />
      </Routes>
    </>
  )
}

export default App
