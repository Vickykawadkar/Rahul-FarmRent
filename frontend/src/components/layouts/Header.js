import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';

export default function Header() {
  const { isAuthenticated, user } = useSelector(state => state.authState);
  const { items: cartItems } = useSelector(state => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className="navbar row align-items-center px-3" style={{ backgroundColor: '#59ED3B' }}>
      {/* Left: Logo + Nav Links */}
      <div className="col-12 col-md-5 d-flex align-items-center">
        <div className="navbar-brand mr-4">
          <Link to="/">
            <img width="130px" alt="Logo" src="/images/logo6.png" />
          </Link>
        </div>

        <ul className="navbar-nav d-flex flex-row ml-2">
          {[
            { to: '/', label: 'HOME' },
            { to: '/productspage', label: 'PRODUCTS' },
            { to: '/contact', label: 'CONTACT' },
            { to: '/about', label: 'ABOUT' },
          ].map((link, idx) => (
            <li className="nav-item mx-2" key={idx}>
              <Link
                className="nav-link nav-animate-link p-0"
                to={link.to}
                style={{
                  color: '#ffffff',
                  fontWeight: '600',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle: Search */}
      <div className="col-12 col-md-4 mt-3 mt-md-0">
        <div style={{ maxWidth: '350px', margin: '0 auto' }}>
          <Search />
        </div>
      </div>

      {/* Right: Cart & Auth */}
      <div className="col-12 col-md-3 mt-3 mt-md-0 text-center text-md-right">
        {isAuthenticated ? (
          <Dropdown className='d-inline'>
            <Dropdown.Toggle variant='default text-white pr-3' id='dropdown-basic'>
              <figure className='avatar avatar-nav'>
                <Image width="40px" src={user.avatar ?? './images/default_avatar.png'} />
              </figure>
              <span>{user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {user.role === 'admin' && (
                <Dropdown.Item onClick={() => navigate('/admin/dashboard')} className='text-dark'>
                  Dashboard
                </Dropdown.Item>
              )}
              <Dropdown.Item onClick={() => navigate('/myprofile')} className='text-dark'>
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/orders')} className='text-dark'>
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className='text-danger'>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn" id="login_btn">Login</Link>
        )}

        <Link to="/cart">
          <span id="cart" className="ml-3 text-white">Cart</span>
        </Link>
        <span className="ml-1 text-white" id="cart_count">{cartItems.length}</span>
      </div>

      {/* Custom Style for Animation */}
      <style>{`
        .nav-animate-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: #59ED3B;
          transition: width 0.3s ease;
        }

        .nav-animate-link:hover::after {
          width: 100%;
        }

        .nav-animate-link:hover {
          color: #59ED3B !important;
        }
      `}</style>
    </nav>
  );
}
