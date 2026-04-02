import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <NavLink to="/" className="logo">
                <img src="/assets/images/logo.png" alt="Billion'Shake logo" height="80" />
              </NavLink>
              <ul className={`nav ${isMenuOpen ? 'active' : ''}`} style={{ display: isMenuOpen ? 'block' : undefined }}>
                <li className="scroll-to-section">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#men" onClick={() => setIsMenuOpen(false)}>T-shirt</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#women" onClick={() => setIsMenuOpen(false)}>Jogging</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#kids" onClick={() => setIsMenuOpen(false)}>Pull-over / Par-dessus</Link>
                </li>
                <li className="submenu">
                  <a href="#!">Pages</a>
                  <ul>
                    <li>
                      <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>A propos</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/single-product" onClick={() => setIsMenuOpen(false)}>Produit</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>Explorer</Link>
                </li>
              </ul>
              <a 
                className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} 
                href="#!" 
                onClick={(e) => {
                  e.preventDefault()
                  toggleMenu()
                }}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
