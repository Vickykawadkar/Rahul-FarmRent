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
    <nav className="navbar row align-items-center px-3">
      {/* Left: Logo + Nav Links */}
      <div className="col-12 col-md-5 d-flex align-items-center">
        <div className="navbar-brand mr-4">
          <Link to="/">
            <img width="130px" alt="Logo" src="/images/logo4.png" />
          </Link>
        </div>

        <ul className="navbar-nav d-flex flex-row ml-2">
  <li className="nav-item mx-2">
    <Link className="nav-link p-0" to="/" style={{ color: '#ffffff' }}>HOME</Link>
  </li>
  <li className="nav-item mx-2">
    <Link className="nav-link p-0" to="/productspage" style={{ color: '#ffffff' }}>PRODUCTS</Link>
  </li>
  <li className="nav-item mx-2">
    <Link className="nav-link p-0" to="/contact" style={{ color: '#ffffff' }}>CONTACT</Link>
  </li>
  <li className="nav-item mx-2">
    <Link className="nav-link p-0" to="/about" style={{ color: '#ffffff' }}>ABOUT</Link>
  </li>
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
          <span id="cart" className="ml-3">Cart</span>
        </Link>
        <span className="ml-1" id="cart_count">{cartItems.length}</span>
      </div>
    </nav>
  );
}
