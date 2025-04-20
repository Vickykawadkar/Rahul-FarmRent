import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import "../App.css";

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_CENTER });
    }
    dispatch(getProducts(null, null, null, null, currentPage));
  }, [dispatch, error, currentPage]);

  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="KrishiRent | Farm Equipment Rental" />

          {/* Hero Section */}
          <motion.section
            className="hero-section text-center p-5"
            initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              marginTop: "80px",
              minHeight: "40vh",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              border: "2px solid #000000",
              borderRadius: "12px",
              backgroundImage: 'url("/images/pexels-pixabay-207247-scaled.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
              }}
            ></div>

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
                  fontSize: "4.5rem",
                  letterSpacing: "-1px",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "700",
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                }}
              >
                Welcome to{" "}
                <span style={{ color: "#4CAF50", fontWeight: "700" }}>
                  KrishiRent
                </span>
              </motion.h1>

              <motion.p
                className="lead mt-3"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  fontFamily: '"Roboto", sans-serif',
                  color: "#f1f1f1",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                Your trusted partner for affordable and reliable agricultural
                equipment rentals.
              </motion.p>

              <motion.div className="mt-5">
                <motion.a
                  href="/productspage"
                  className="btn btn-lg px-5 py-3 shadow"
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontFamily: '"Poppins", sans-serif',
                    backgroundColor: "#FFD700",
                    color: "#1B1B1B",
                    border: "none",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                  }}
                  whileTap={{
                    scale: 0.95,
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
                fontWeight: "800",
                fontSize: "3rem",
                fontFamily: '"Poppins", sans-serif',
                position: "relative",
                display: "inline-block",
                color: "#2C6B2F",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              FEATURED PRODUCTS
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  height: "4px",
                  backgroundColor: "#1B1B1B",
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  right: 0,
                  transformOrigin: "left",
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
              backgroundColor: "#EDF8E9",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          >
            <div className="container text-center">
              <motion.h2
                style={{
                  fontWeight: "800",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "3rem",
                  color: "#2C6B2F",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Our Services
              </motion.h2>

              <div className="row mt-4">
                {[
                  {
                    icon: "fas fa-tractor",
                    title: "Tractor Rental",
                    desc: "Well-maintained tractors from top brands available on hourly rental basis.",
                  },
                  {
                    icon: "fas fa-tools",
                    title: "Equipment Service",
                    desc: "Each equipment is quality checked and serviced for maximum performance.",
                  },
                  {
                    icon: "fas fa-headset",
                    title: "24/7 Support",
                    desc: "Our team is available round the clock to help you with bookings and inquiries.",
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
                        border: "2px solid black",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        height: "100%",
                      }}
                    >
                      <i
                        className={`${service.icon} fa-3x mb-3`}
                        style={{ color: "#2C6B2F" }}
                      ></i>
                      <h5
                        style={{
                          fontWeight: "600",
                          fontFamily: '"Poppins", sans-serif',
                          color: "#2c2c2c",
                        }}
                      >
                        {service.title}
                      </h5>
                      <p
                        style={{
                          color: "#2c2c2c",
                          fontSize: "1.2rem",
                        }}
                      >
                        {service.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Us */}
          <section
            className="container text-center py-5 mt-5"
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              backgroundColor: "#EDF8E9",
            }}
          >
            <motion.h2
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                fontFamily: '"Poppins", sans-serif',
                color: "#2C6B2F",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              About KrishiRent
            </motion.h2>

            <motion.p
              className="mt-4 px-5"
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#2c2c2c",
                fontFamily: '"Poppins", sans-serif',
                lineHeight: "1.7",
              }}
            >
              “KrishiRent is a modern agriculture solution platform that empowers farmers by giving
              them access to the latest farming equipment without huge investments. We believe in
              innovation, reliability, and supporting the backbone of our country—our farmers.”
            </motion.p>
          </section>

          {/* Contact Us */}
          <section
            className="py-5 mt-5"
            style={{
              backgroundColor: "#EDF8E9",
              border: "2px solid black",
              borderRadius: "10px",
            }}
          >
            <div className="container text-center">
              <motion.h4
                style={{
                  fontWeight: "800",
                  fontSize: "3rem",
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#2C6B2F",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Contact Us
              </motion.h4>

              <motion.p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "#2c2c2c",
                }}
              >
                Email:{" "}
                <span
                  style={{
                    color: "#2C6B2F",
                    fontWeight: "600",
                  }}
                >
                  support@krishirent.com
                </span>
              </motion.p>

              <motion.p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "#2c2c2c",
                }}
              >
                Phone:{" "}
                <span
                  style={{
                    color: "#2C6B2F",
                    fontWeight: "600",
                  }}
                >
                  +91-9876543210
                </span>
              </motion.p>

              <motion.p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "#2C6B2F",
                }}
              >
                <span style={{ color: "#000000" }}>Location:</span> AgriTech Hub, Pune, India
              </motion.p>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}
