import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import NavMobile from "./Components/NavMobile"
import Home from './Pages/Home'
import { useState, useEffect } from 'react'

const MainLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })
  return (
    <div className=''>
      {isMobile ? <NavMobile /> : <NavBar />}<div className="scroll-smooth ">
        <Outlet />
      </div>
    </div>
  )
}
const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<Home  />} />
          <Route path='/Experience' element={<Home />} />
          <Route path='/Projects' element={<Home />} />
          <Route path='/Contact' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
