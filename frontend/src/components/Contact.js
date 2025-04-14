import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", form);
    alert("Message Sent! We'll contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Fragment>
      <title>Contact Us - KrishiRent</title>
      <section className="container my-5">
        <motion.h2
          className="text-center mb-4 fw-bold"
          style={{ color: '#f0590e' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="row">
          {/* Contact Form */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white">
              {["name", "email", "message"].map((field, idx) => (
                <div className={`form-group ${idx > 0 ? "mt-3" : ""}`} key={field}>
                  <label className="fw-bold">
                    {field === "name" ? "Your Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="form-control"
                      required
                      placeholder={`Enter your ${field}`}
                      style={{
                        borderColor: "#f0590e",
                        borderRadius: "10px",
                        transition: "0.3s"
                      }}
                      onFocus={(e) => e.target.style.boxShadow = "0 0 6px #f0590e66"}
                      onBlur={(e) => e.target.style.boxShadow = "none"}
                    />
                  ) : (
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      required
                      placeholder="Your message here..."
                      style={{
                        borderColor: "#f0590e",
                        borderRadius: "10px",
                        transition: "0.3s"
                      }}
                      onFocus={(e) => e.target.style.boxShadow = "0 0 6px #f0590e66"}
                      onBlur={(e) => e.target.style.boxShadow = "none"}
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                className="btn mt-4 px-4 py-2"
                style={{
                  backgroundColor: "#f0590e",
                  color: "#fff",
                  fontWeight: "600",
                  borderRadius: "30px",
                  fontSize: "1rem"
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#e14e09" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-md-6 mt-5 mt-md-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-light p-4 rounded shadow-sm">
              <h4 className="mb-3 fw-bold">Contact Info</h4>
              <p><strong>Email:</strong> support@krishirent.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Address:</strong> AgriTech Park, Pune, Maharashtra, India</p>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0034063076456!2d73.87506527521692!3d18.57172776716169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13c48000001%3A0x32666d6323d44157!2sAgriculture%20College!5e0!3m2!1sen!2sin!4v1615898018934!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "10px" }}
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
