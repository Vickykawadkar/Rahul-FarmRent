import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { motion } from 'framer-motion';
import 'animate.css';
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

<motion.section
  className="hero-section text-center p-5"
  initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
  animate={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
  style={{
    marginTop: '80px',
    backgroundColor: '#ffffff',
    color: '#ffffff',
    minHeight: '40vh',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    border: '2px solid #000000', // Border width reduced
    borderRadius: '12px',
  }}
>
  {/* Background Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.1)',
      zIndex: 1,
    }}
  ></div>

  {/* Hero Content */}
  <motion.div
    className="hero-content position-relative z-index-2"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{ zIndex: 2 }}
  >
    <motion.h1
      className="display-3 fw-bold"
      style={{
        fontSize: '4.5rem',
        letterSpacing: '-1px',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '700',
        color: '#232f3e',
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to <span style={{ color: '#f0590e', fontWeight: '700' }}>KrishiRent</span>
    </motion.h1>

    <motion.p
      className="lead mt-3"
      style={{
        fontSize: '1.3rem',
        fontWeight: '300',
        fontFamily: '"Roboto", sans-serif',
        color: '#232f3e',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Your trusted partner for affordable and reliable agricultural equipment rentals.
    </motion.p>

    <motion.div
      className="mt-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.a
        href="/productspage"
        className="btn btn-warning btn-lg px-5 py-3 shadow"
        style={{
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          borderRadius: '50px',
          padding: '15px 30px',
          fontSize: '1.1rem',
          fontFamily: '"Poppins", sans-serif',
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: '#f3b700',
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        Explore Products
      </motion.a>
    </motion.div>
  </motion.div>
</motion.section>

          {/* Featured Products */}
          <section className="container mt-5">
  <motion.h1
    className="text-center mb-4"
    style={{
      fontWeight: '800',
      fontSize: '2.5rem',
      fontFamily: '"Poppins", sans-serif',
      position: 'relative',
      display: 'inline-block',
      color: '#232f3e',
    }}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    FEATURED PRODUCTS
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        height: '4px',
        backgroundColor: '#232f3e',
        position: 'absolute',
        bottom: '-8px',
        left: 0,
        right: 0,
        transformOrigin: 'left',
      }}
    />
  </motion.h1>

  <div className="row mt-3">
    {featuredProducts.map((product) => (
      <Product col={4} key={product._id} product={product} />
    ))}
  </div>
</section>

        
          {/* Services Section */}
          <section
  className="py-5 mt-5"
  style={{
    backgroundColor: '#f8f9fa',
    border: '2px solid black',
    borderRadius: '10px',
  }}
>
  <div className="container text-center">
    <motion.h2
      style={{
        fontWeight: '800',
        fontFamily: '"Poppins", sans-serif',
        fontSize: '3rem',
        color: '#232f3e',
        letterSpacing: '1px',
        textTransform: 'uppercase',
      }}
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
    >
      Our Services
    </motion.h2>

    <div className="row mt-4">
      {[
        {
          icon: 'fas fa-tractor',
          title: 'Tractor Rental',
          desc: 'Well-maintained tractors from top brands available on hourly rental basis.',
        },
        {
          icon: 'fas fa-tools',
          title: 'Equipment Service',
          desc: 'Each equipment is quality checked and serviced for maximum performance.',
        },
        {
          icon: 'fas fa-headset',
          title: '24/7 Support',
          desc: 'Our team is available round the clock to help you with bookings and inquiries.',
        },
      ].map((service, idx) => (
        <motion.div
          className="col-md-4"
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 mb-4"
            style={{
              border: '2px solid black',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <i className={`${service.icon} fa-3x mb-3`} style={{ color: '#232f3e' }}></i>
            <h5 style={{ fontWeight: '600', fontFamily: '"Poppins", sans-serif' }}>
              {service.title}
            </h5>
            <p style={{ color: '#555', fontSize: '1rem' }}>{service.desc}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
          {/* About Us Section */}
          <section
  className="container text-center py-5 mt-5"
  style={{
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  }}
>
  <motion.h2
    style={{
      fontWeight: "800",
      fontSize: "3rem",
      fontFamily: '"Poppins", sans-serif',
      color: "#232f3e",
      textTransform: "uppercase",
      letterSpacing: "1px",
    }}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
  >
    About KrishiRent
  </motion.h2>

  <motion.p
    className="mt-4 px-5"
    style={{
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#444",
      fontFamily: '"Poppins", sans-serif',
      lineHeight: "1.7",
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    “KrishiRent is a modern agriculture solution platform that empowers farmers by giving
    them access to the latest farming equipment without huge investments. We believe in
    innovation, reliability, and supporting the backbone of our country—our farmers.”
  </motion.p>
</section>

          {/* Contact Section */}
          

<section
  className="bg-dark text-white py-5 mt-5"
  style={{
    backgroundColor: "#232f3e", // Dark background
    borderTop: "2px solid black", // Border for the top edge
    borderRadius: "10px",
  }}
>
  <div className="container text-center">
    {/* Header Section with Border and Animation */}
    <motion.h4
      style={{
        fontWeight: "700",
        fontSize: "2.5rem",
        fontFamily: '"Poppins", sans-serif',
        letterSpacing: "1px",
        display: "inline-block",
        padding: "10px 20px",
        border: "2px solid white", // Border for the header
        borderRadius: "5px",
        marginBottom: "30px", // Adding margin for spacing
        textTransform: "uppercase",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
    >
      Contact Us
    </motion.h4>

    {/* Contact Information with Animated Text */}
    <motion.p
      style={{
        fontSize: "1.1rem",
        fontWeight: "500",
        marginTop: "20px",
        color: "#e0e0e0", // Light gray for better readability
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Email:{" "}
      <motion.span
        style={{
          color: "#ff8c00", // Highlight the email with a distinct color
          fontWeight: "600",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        support@krishirent.com
      </motion.span>
    </motion.p>

    <motion.p
      style={{
        fontSize: "1.1rem",
        fontWeight: "500",
        marginTop: "10px",
        color: "#e0e0e0", // Light gray for readability
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Phone:{" "}
      <motion.span
        style={{
          color: "#ff8c00", // Highlight the phone number with a distinct color
          fontWeight: "600",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        +91-9876543210
      </motion.span>
    </motion.p>

    <motion.p
      style={{
        fontSize: "1.1rem",
        fontWeight: "500",
        marginTop: "10px",
        color: "#e0e0e0", // Light gray for readability
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      Location: AgriTech Hub, Pune, India
    </motion.p>
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
