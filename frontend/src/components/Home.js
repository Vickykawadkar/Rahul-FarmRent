import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import "../App.css"; // Add any animation or custom styles here

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } =
    useSelector((state) => state.productsState);
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(getProducts(null, null, null, null, currentPage));
  }, [error, dispatch, currentPage]);

  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"KrishiRent | Farm Equipment Rental"} />

          {/* Hero Section */}
          <section className="hero-section text-center p-5 bg-light">
            <h1 className="display-4 animate__animated animate__fadeInDown">Welcome to KrishiRent</h1>
            <p className="lead mt-3">Your trusted partner for affordable and reliable agricultural equipment rentals.</p>
          </section>

          {/* Featured Products */}
          <section className="container mt-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
              {featuredProducts.map((product) => (
                <Product col={4} key={product._id} product={product} />
              ))}
            </div>
          </section>

        
          {/* Services Section */}
          <section className="bg-light py-5 mt-5">
            <div className="container text-center">
              <h2>Our Services</h2>
              <div className="row mt-4">
                <div className="col-md-4">
                  <i className="fas fa-tractor fa-3x mb-3"></i>
                  <h5>Tractor Rental</h5>
                  <p>Well-maintained tractors from top brands available on hourly rental basis.</p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-tools fa-3x mb-3"></i>
                  <h5>Equipment Service</h5>
                  <p>Each equipment is quality checked and serviced for maximum performance.</p>
                </div>
                <div className="col-md-4">
                  <i className="fas fa-headset fa-3x mb-3"></i>
                  <h5>24/7 Support</h5>
                  <p>Our team is available round the clock to help you with bookings and inquiries.</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="container text-center py-5">
            <h2>About KrishiRent</h2>
            <p className="mt-3 px-5">
              KrishiRent is a modern agriculture solution platform that empowers farmers by giving
              them access to the latest farming equipment without huge investments. We believe in
              innovation, reliability, and supporting the backbone of our country—our farmers.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-dark text-white py-4">
            <div className="container text-center">
              <h4>Contact Us</h4>
              <p>Email: support@krishirent.com | Phone: +91-9876543210</p>
              <p>Location: AgriTech Hub, Pune, India</p>
            </div>
          </section>

          {/* Pagination */}
          {productsCount > 0 && productsCount > resPerPage && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                onChange={setCurrentPageNo}
                totalItemsCount={productsCount}
                itemsCountPerPage={resPerPage}
                nextPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass={"page-item"}
                linkClass={"page-link"}
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
