import React, { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <title>About Us - KrishiRent</title>
      <section className="container my-5">
        <h2 className="text-center mb-4">About Us</h2>

        <div className="row">
          {/* About Info */}
          <div className="col-md-6">
            <h4>Our Mission</h4>
            <p>
              At KrishiRent, our mission is to provide farmers and agricultural
              businesses with access to high-quality and affordable equipment for
              rent. We aim to bridge the gap between advanced technology and small to
              medium-scale agricultural practices, empowering farmers to maximize
              productivity without the burden of large upfront investments.
            </p>

            <h4>Our Vision</h4>
            <p>
              We envision a future where farmers across India have easy access to the
              best agricultural equipment, enabling them to grow their businesses and
              contribute to food security and sustainable farming practices.
            </p>

            <h4>Our Values</h4>
            <ul>
              <li>Customer-Centric: We put farmers' needs at the heart of our services.</li>
              <li>Sustainability: We are committed to promoting environmentally friendly farming solutions.</li>
              <li>Innovation: We strive to bring cutting-edge agricultural technologies to farmers.</li>
              <li>Integrity: We believe in transparent, fair business practices.</li>
            </ul>
          </div>

          {/* Team Info */}
          <div className="col-md-6 mt-5 mt-md-0">
            <h4>Meet Our Team</h4>
            <p>
              Our dedicated team of professionals comes from diverse backgrounds, united by a common passion for
              empowering the agricultural community. From engineers to customer service experts, we all work together
              to provide exceptional service and support to our customers.
            </p>

            <div className="team">
              <div className="team-member">
                <h5>John Doe</h5>
                <p>Co-founder & CEO</p>
              </div>
              <div className="team-member">
                <h5>Jane Smith</h5>
                <p>Co-founder & COO</p>
              </div>
              <div className="team-member">
                <h5>Raj Kumar</h5>
                <p>Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image or Video Section */}
        <div className="mt-5 text-center">
          <h4>Our Commitment to Excellence</h4>
          <p>Here at KrishiRent, we take pride in the quality of our equipment and the services we offer. Watch this short video to learn more about our journey and vision.</p>
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
