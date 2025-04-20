import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory !== "") {
      const encodedCategory = encodeURIComponent(selectedCategory);
      navigate(`/search/${encodedCategory}`);
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    dispatch(getProducts(null, null, null, null, currentPage));
  }, [error, dispatch, currentPage]);

  return (
    <Fragment>
      {loading ? <Loader /> :
        <Fragment>
          <MetaData title={'Buy Best Products'} />
          
          {/* Header */}
          <motion.h1
            id="products_heading"
            style={{
              color: '#2e7d32',
              fontSize: '3rem',
              fontWeight: '800',
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'center',
              margin: '2rem 0 1rem',
              letterSpacing: '1.5px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            🚜 Explore Our Latest Products
          </motion.h1>

          {/* Category Dropdown */}
          <motion.div
            className="container mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6">
                <select
                  className="form-select p-3 rounded-4 shadow-sm"
                  onChange={handleCategoryChange}
                  defaultValue=""
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    fontFamily: '"Poppins", sans-serif',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ddd',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>🔍 Select a Category</option>
                  <option value="Tractor">🚜 Tractor</option>
                  <option value="Equipment">🛠 Equipment</option>
                  <option value="Horticulture & Gardening Tools">🌿 Horticulture & Gardening Tools</option>
                  <option value="Special Equipment">⚙️ Special Equipment</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Section */}
          <section id="products" className="container">
            <motion.div
              className="row g-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {products && products.map(product => (
                <motion.div
                  key={product._id}
                  className="col-md-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Product col={12} product={product} />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Pagination */}
          {productsCount > 0 && productsCount > resPerPage && (
            <motion.div
              className="d-flex justify-content-center mt-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Pagination
                activePage={currentPage}
                onChange={setCurrentPageNo}
                totalItemsCount={productsCount}
                itemsCountPerPage={resPerPage}
                nextPageText={'Next'}
                firstPageText={'First'}
                lastPageText={'Last'}
                itemClass={'page-item'}
                linkClass={'page-link'}
              />
            </motion.div>
          )}
        </Fragment>
      }
    </Fragment>
  );
}
