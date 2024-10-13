import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import NotFound from './NotFound'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
