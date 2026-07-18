import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

function scrollToApps() {
  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })
}

export function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  function goToApps() {
    if (location.pathname === '/') {
      scrollToApps()
      return
    }
    navigate('/')
    window.setTimeout(scrollToApps, 50)
  }

  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          Zanz Softwares
        </Link>
        <nav className="nav">
          <button type="button" onClick={goToApps}>
            Apps
          </button>
          <a href="mailto:zanzsoftwares@gmail.com">Contact</a>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Zanz Softwares</p>
        <a href="mailto:zanzsoftwares@gmail.com">zanzsoftwares@gmail.com</a>
      </footer>
    </div>
  )
}
