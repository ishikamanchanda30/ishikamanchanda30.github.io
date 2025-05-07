import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import About from "./Components/About"
import NavBar from "./Components/NavBar"
import NavMobile from "./Components/NavMobile"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"
import Landing from "./Components/Landing"
import { useState, useEffect } from 'react'
import Home from './Pages/Home'


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
          <Route path='/about' element={<Home />} />
          <Route path='/Experience' element={<Home />} />
          <Route path='/Projects' element={<Home />} />
          <Route path='/Contact' element={<Home />} />
        </Route>
      </Routes>


    </Router>
  )
}

export default App
