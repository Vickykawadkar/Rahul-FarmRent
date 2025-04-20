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
            color: '#4CAF50',
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
              style={{
                fontSize: '2.2rem', 
                fontWeight: '700', 
                color: '#4CAF50', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px'
              }}
            >
              Our Mission
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                fontSize: '1.1rem', 
                lineHeight: '1.7', 
                color: '#333', 
                fontWeight: '400', 
                letterSpacing: '0.5px'
              }}
            >
              At <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>KrishiRent</span>, our mission is to provide farmers and agricultural businesses with access to <span style={{ fontWeight: '700', color: '#4CAF50' }}>high-quality</span> and <span style={{ fontWeight: '700', color: '#4CAF50' }}>affordable</span> equipment for rent. We aim to bridge the gap between <span style={{ fontWeight: '700', color: '#4CAF50' }}>advanced technology</span> and small to medium-scale agricultural practices, empowering farmers to maximize productivity without the burden of large upfront investments.
            </motion.p>

            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: '2.2rem', 
                fontWeight: '700', 
                color: '#4CAF50', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px'
              }}
            >
              Our Vision
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                fontSize: '1.1rem', 
                lineHeight: '1.7', 
                color: '#333', 
                fontWeight: '400', 
                letterSpacing: '0.5px'
              }}
            >
              We envision a future where farmers across India have easy access to the best agricultural equipment, enabling them to grow their businesses and contribute to <span style={{ fontWeight: '700', color: '#4CAF50', fontSize: '1.2rem' }}>food security</span> and <span style={{ fontWeight: '700', color: '#4CAF50', fontSize: '1.2rem' }}>sustainable farming practices</span>.
            </motion.p>

            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: '2.2rem', 
                fontWeight: '700', 
                color: '#4CAF50', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px'
              }}
            >
              Our Values
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                listStyleType: 'none',
                padding: '0',
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                fontWeight: '400', 
                letterSpacing: '0.5px'
              }}
            >
              {[
                { label: 'Customer-Centric', text: "We put farmers' needs at the heart of our services." },
                { label: 'Sustainability', text: "We are committed to promoting environmentally friendly farming solutions." },
                { label: 'Innovation', text: "We strive to bring cutting-edge agricultural technologies to farmers." },
                { label: 'Integrity', text: "We believe in transparent, fair business practices." },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  style={{ marginBottom: '15px' }}
                >
                  <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#4CAF50' }}>
                    {item.label}:
                  </span> {item.text}
                </motion.li>
              ))}
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
              style={{
                fontSize: '2.5rem', 
                fontWeight: '700', 
                color: '#4CAF50', 
                textTransform: 'uppercase',
                letterSpacing: '1px', 
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
              }}
            >
              Meet Our Team
            </motion.h4>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: '1.2rem', 
                lineHeight: '1.8', 
                color: '#333', 
                fontWeight: '400', 
                letterSpacing: '0.5px', 
                marginBottom: '20px',
              }}
            >
              Our dedicated team of professionals comes from diverse backgrounds, united by a common passion for <span style={{ fontWeight: '700', color: '#4CAF50', fontSize: '1.3rem' }}>empowering the agricultural community</span>. From engineers to customer service experts, we all work together to provide exceptional service and support to our customers.
            </motion.p>

            <div className="team">
              {[
                { name: 'John Doe', role: 'Co-founder & CEO' },
                { name: 'Jane Smith', role: 'Co-founder & COO' },
                { name: 'Raj Kumar', role: 'Lead Engineer' },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className="team-member"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                  style={{
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: '#4CAF50',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '10px',
                    }}
                  >
                    {member.name}
                  </motion.h5>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '500',
                      color: '#333',
                      marginBottom: '15px',
                    }}
                  >
                    {member.role}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
