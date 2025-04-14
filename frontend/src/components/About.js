import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Fragment>
      <title>About Us - KrishiRent</title>
      <section className="container my-5">
        
        {/* Animated About Us Header */}
        <motion.h2
          className="text-center mb-4 fw-bold"
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#f0590e',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          About Us
        </motion.h2>

        <div className="row">
          {/* About Info */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our Mission
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              At KrishiRent, our mission is to provide farmers and agricultural businesses with access to high-quality and affordable equipment for rent. We aim to bridge the gap between advanced technology and small to medium-scale agricultural practices, empowering farmers to maximize productivity without the burden of large upfront investments.
            </motion.p>

            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our Vision
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              We envision a future where farmers across India have easy access to the best agricultural equipment, enabling them to grow their businesses and contribute to food security and sustainable farming practices.
            </motion.p>

            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our Values
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <li>Customer-Centric: We put farmers' needs at the heart of our services.</li>
              <li>Sustainability: We are committed to promoting environmentally friendly farming solutions.</li>
              <li>Innovation: We strive to bring cutting-edge agricultural technologies to farmers.</li>
              <li>Integrity: We believe in transparent, fair business practices.</li>
            </motion.ul>
          </motion.div>

          {/* Team Info */}
          <motion.div
            className="col-md-6 mt-5 mt-md-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Meet Our Team
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Our dedicated team of professionals comes from diverse backgrounds, united by a common passion for empowering the agricultural community. From engineers to customer service experts, we all work together to provide exceptional service and support to our customers.
            </motion.p>

            <div className="team">
              <motion.div
                className="team-member"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h5>John Doe</h5>
                <p>Co-founder & CEO</p>
              </motion.div>
              <motion.div
                className="team-member"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h5>Jane Smith</h5>
                <p>Co-founder & COO</p>
              </motion.div>
              <motion.div
                className="team-member"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h5>Raj Kumar</h5>
                <p>Lead Engineer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Image or Video Section */}
        <div className="mt-5 text-center">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Commitment to Excellence
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Here at KrishiRent, we take pride in the quality of our equipment and the services we offer. Watch this short video to learn more about our journey and vision.
          </motion.p>
          <iframe
            title="Company Journey"
            src="https://www.youtube.com/embed/your-video-id"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Fragment>
  );
}
