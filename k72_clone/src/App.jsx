import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Work from './pages/Work'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
