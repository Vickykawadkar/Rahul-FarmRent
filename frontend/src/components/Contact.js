import React, { Fragment, useState } from "react";

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
        <h2 className="text-center mb-4">Get in Touch</h2>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group mt-3">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="bg-light p-4 rounded">
              <h4>Contact Info</h4>
              <p><strong>Email:</strong> support@krishirent.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Address:</strong> AgriTech Park, Pune, Maharashtra, India</p>

              {/* Google Map Embed */}
              <div className="mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0034063076456!2d73.87506527521692!3d18.57172776716169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13c48000001%3A0x32666d6323d44157!2sAgriculture%20College!5e0!3m2!1sen!2sin!4v1615898018934!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
