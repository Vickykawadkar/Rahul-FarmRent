import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Fragment>
      <title>Contact Us - KrishiRent</title>
      <section className="container my-5">
        {/* Heading */}
        <motion.h2
          className="text-center mb-5 fw-bold"
          style={{
            color: '#4CAF50',
            fontSize: '2.8rem',
            fontFamily: '"Poppins", sans-serif',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         <b> Get in Touch</b>
        </motion.h2>

        <div className="row justify-content-center">
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="p-4 rounded shadow-sm"
              style={{
                backgroundColor: "#f9fdf8",
                border: "2px solid #d6e9c6",
                borderRadius: "12px",
              }}
            >
              <h4
                className="mb-4"
                style={{
                  fontWeight: "700",
                  fontFamily: '"Poppins", sans-serif',
                  color: "#333",
                }}
              >
                Contact Information
              </h4>

              <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                <span style={{ fontWeight: "600", color: "#4CAF50" }}>Email:</span>{" "}
                support@krishirent.com
              </p>

              <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                <span style={{ fontWeight: "600", color: "#4CAF50" }}>Phone:</span>{" "}
                +91 9876543210
              </p>

              <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
                <span style={{ fontWeight: "600", color: "#4CAF50" }}>Address:</span>{" "}
                IT Park, Indore, Madhya pradesh, India
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0034063076456!2d73.87506527521692!3d18.57172776716169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13c48000001%3A0x32666d6323d44157!2sAgriculture%20College!5e0!3m2!1sen!2sin!4v1615898018934!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{
                    border: 0,
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
