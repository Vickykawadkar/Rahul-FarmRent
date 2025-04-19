import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function workflow() {
  const steps = [
    {
      title: "Browse Equipment",
      description:
        "Explore a wide range of agricultural equipment available for rent based on your location and needs.",
    },
    {
      title: "Check Availability",
      description:
        "View availability and detailed specifications to ensure the equipment suits your farming requirements.",
    },
    {
      title: "Book Instantly",
      description:
        "Reserve the equipment with a simple booking process. No hassle, no middlemen—just quick confirmation.",
    },
    {
      title: "Use & Return",
      description:
        "Get the equipment delivered or pick it up. Use it as per the rental period and return it after use.",
    },
  ];

  return (
    <Fragment>
      <title>Workflow - KrishiRent</title>
      <section className="container my-5">
        {/* Page Heading */}
        <motion.h2
          className="text-center mb-5 fw-bold"
          style={{
            color: "#4CAF50",
            fontSize: "2.8rem",
            fontFamily: '"Poppins", sans-serif',
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <b>workflow</b>
        </motion.h2>

        {/* Steps Section */}
        <div className="row justify-content-center">
          <motion.div
            className="col-md-10"
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
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h5
                    style={{
                      color: "#4CAF50",
                      fontWeight: "600",
                      fontSize: "1.3rem",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Step {index + 1}: {step.title}
                  </h5>
                  <p style={{ fontSize: "1.1rem", color: "#444" }}>
                    {step.description}
                  </p>
                  {index < steps.length - 1 && <hr />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
