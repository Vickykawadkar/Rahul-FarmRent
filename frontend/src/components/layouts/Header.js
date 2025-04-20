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
    <nav
      className="navbar row align-items-center px-3 shadow-sm"
      style={{
        background: "linear-gradient(90deg, #EDF8E9 0%, #4CAF50 100%)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: "2px solid rgba(0,0,0,0.05)",
        zIndex: 1000,
        position: "sticky",
        top: 0,
      }}
    >
      {/* Left: Logo + Nav Links */}
      <div className="col-12 col-md-5 d-flex align-items-center">
        <div className="navbar-brand mr-4">
          <Link to="/">
            <img width="130px" alt="Logo" src="/images/logo14.png" />
          </Link>
        </div>

        <ul className="navbar-nav d-flex flex-row ml-2">
          {[
            { to: '/', label: 'HOME' },
            { to: '/productspage', label: 'PRODUCTS' },
            { to: '/contact', label: 'CONTACT' },
            { to: '/about', label: 'ABOUT' },
            { to: '/workflow', label: 'WORKFLOW' },
          ].map((link, idx) => (
            <li className="nav-item mx-2" key={idx}>
              <Link
                className="nav-link nav-animate-link p-0"
                to={link.to}
                style={{
                  color: '#000000',
                  fontWeight: '600',
                  position: 'relative',
                  paddingBottom: '4px',
                  fontSize: '0.95rem',
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
            <Dropdown.Toggle variant='default text-dark pr-3' id='dropdown-basic'>
              <figure className='avatar avatar-nav d-inline-block mb-0 mr-2'>
                <Image
                  width="38px"
                  height="38px"
                  roundedCircle
                  src={user.avatar ?? './images/default_avatar.png'}
                  alt="User Avatar"
                />
              </figure>
              <span style={{ fontWeight: "600" }}>{user.name}</span>
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
              {user.role !== 'admin' && (
                <Dropdown.Item onClick={() => navigate('/orders')} className='text-dark'>
                  Orders
                </Dropdown.Item>
              )}
              <Dropdown.Item onClick={logoutHandler} className='text-danger'>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn btn-outline-dark font-weight-bold px-3 py-1" id="login_btn">
            Login
          </Link>
        )}

        <Link to="/cart" className="ml-3">
          <span id="cart" className="text-dark font-weight-bold">Cart</span>
        </Link>
        <span className="ml-1 text-dark" id="cart_count">{cartItems.length}</span>
      </div>

      {/* Custom Styles */}
      <style>{`
        .nav-animate-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: #000;
          transition: width 0.3s ease;
        }

        .nav-animate-link:hover::after {
          width: 100%;
        }

        .nav-animate-link:hover {
          color: #4CAF50 !important;
        }

        #login_btn:hover {
          background-color: #4CAF50;
          color: white;
          border-color: #4CAF50;
        }
      `}</style>
    </nav>
  );
}
