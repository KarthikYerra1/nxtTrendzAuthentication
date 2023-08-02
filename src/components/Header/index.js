import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="home-logo"
      />
      <div className="sm-nav-container">
        <ul className="icons-container-lg">
          <Link to="/" className="link">
            <li className="nav-text">Home</li>
          </Link>
          <Link to="/products" className="link">
            <li className="nav-text">Products</li>
          </Link>
          <Link to="/cart" className="link">
            <li className="nav-text">Cart</li>
          </Link>
        </ul>
        <button className="btn-icon-sm" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
            alt="nav logout"
            className="icon-img"
          />
        </button>
        <button type="button" className="btn-logout">
          Logout
        </button>
      </div>
    </div>
    <ul className="icons-container-sm">
      <Link to="/" className="link">
        <li className="nav-icons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="icon-img"
          />
        </li>
      </Link>
      <Link to="/products" className="link">
        <li className="nav-icons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="icon-img"
          />
        </li>
      </Link>
      <Link to="/cart" className="link">
        <li className="nav-icons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="icon-img"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
