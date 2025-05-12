import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark text-light py-4 mt-5 shadow-sm"
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Left - Privacy Policy */}
          <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/privacy-policy" className="text-light text-decoration-none fw-light">
                Privacy Policy
              </Link>
            </motion.div>
          </div>

          {/* Center - Disclaimer */}
          <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/disclaimer" className="text-light text-decoration-none fw-light">
                Disclaimer
              </Link>
            </motion.div>
          </div>

          {/* Right - Terms & Conditions */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/terms-and-conditions"
                className="text-light text-decoration-none fw-light"
              >
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom copyright */}
        <motion.p
          className="text-center mb-0 mt-3 small fw-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; {year} <strong>KRISHIRENT</strong>. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
