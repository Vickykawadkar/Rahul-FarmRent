import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';
import { motion } from "framer-motion";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
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
          <motion.h1
            id="products_heading"
            style={{
              color: '#4CAF50',
              fontSize: '2.5rem',
              fontWeight: '700',
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Products
          </motion.h1>

          <section id="products" className="container mt-5">
            <motion.div
              className="row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {products && products.map(product => (
                <Product col={4} key={product._id} product={product} />
              ))}
            </motion.div>
          </section>

          {productsCount > 0 && productsCount > resPerPage ?
            <div className="d-flex justify-content-center mt-5">
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
            </div> : null}
        </Fragment>
      }
    </Fragment>
  );
}
