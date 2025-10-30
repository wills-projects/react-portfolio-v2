import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function RouteTransition({ children }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-transition">
      {children}
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {setIsLoading(false)}, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isFadingOut={!isLoading} />
      <header className="header">
        <span className="header-name">William Lee</span>
        <nav className="nav">
          <Link to="/">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <RouteTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouteTransition>
    </>
  )
}

export default App
