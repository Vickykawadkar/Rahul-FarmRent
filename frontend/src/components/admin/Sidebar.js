import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar" className="p-3">
        <ul className="list-unstyled components">
          <li className="mb-2">
            <Link to="/admin/dashboard" className="sidebar-link">
              <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
            </Link>
          </li>

          <li className="mb-2">
            <NavDropdown
              title={<span><i className="fa fa-product-hunt mr-2"></i>Product</span>}
              className="sidebar-link"
            >
              <NavDropdown.Item onClick={() => navigate('/admin/products')}>
                <i className="fa fa-shopping-basket mr-2"></i>All
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/admin/products/create')}>
                <i className="fa fa-plus mr-2"></i>Create
              </NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className="mb-2">
            <Link to="/admin/orders" className="sidebar-link">
              <i className="fa fa-shopping-basket mr-2"></i> Orders
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/admin/users" className="sidebar-link">
              <i className="fa fa-users mr-2"></i> Users
            </Link>
          </li>

          <li>
            <Link to="/admin/reviews" className="sidebar-link">
              <i className="fa fa-star mr-2"></i> Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <style>{`
        .sidebar-wrapper {
          min-height: 100vh;
          background: linear-gradient(to bottom, #E3F9E5, #D0F2CF);
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
        }

        .sidebar-link {
          display: block;
          padding: 10px 15px;
          color: #2E7D32;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: background-color 0.3s, color 0.3s;
        }

        .sidebar-link:hover {
          background-color: #BFEABF;
          color: #1B5E20;
          text-decoration: none;
        }

        #sidebar .dropdown-menu {
          background-color: #ffffff;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        #sidebar .dropdown-item {
          color: #2E7D32;
          font-weight: 500;
          padding: 8px 16px;
          transition: background-color 0.2s ease-in-out;
        }

        #sidebar .dropdown-item:hover {
          background-color: #D7F8D2;
          color: #1B5E20;
        }
      `}</style>
    </div>
  );
}

