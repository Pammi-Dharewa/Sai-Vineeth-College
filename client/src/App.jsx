import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Courses from './pages/Courses'
import Events from './pages/Events'
import Transportation from './pages/Transportation'
import Faculty from './pages/Faculty'
import About from './pages/About'
import Fee from './pages/Fee'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<About />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="*" element={<NotFound />} />        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
