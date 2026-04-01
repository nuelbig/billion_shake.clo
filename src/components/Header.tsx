import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <NavLink to="/" className="logo">
                <img src="/assets/images/logo.png" alt="BillionShake logo" />
              </NavLink>
              <ul className="nav">
                <li className="scroll-to-section">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#men">T-shirt</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#women">Jogging</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#kids">Pull-over / Par-dessus</Link>
                </li>
                <li className="submenu">
                  <a href="#!">Pages</a>
                  <ul>
                    <li>
                      <NavLink to="/about">A propos</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/single-product">Produit</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <Link to="/products">Explorer</Link>
                </li>
              </ul>
              <a className="menu-trigger" href="#!">
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
