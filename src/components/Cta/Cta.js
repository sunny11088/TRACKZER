import React from 'react';
import './Cta.scss';

const Cta = () => {
  return (
    <React.Fragment>
        <section className="cta-bg">
        <div className="container custom-container">
        <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="cta-main text-center">
                <h2 className="medium font-50 text-white mb-3 position-relative">Feel Free to Contact us Directly</h2>
                <p
                  className="regular font-18 text-white mt-4 mb-4 position-relative"
                  style={{ maxWidth: '900px', margin: 'auto' }}
                >
                  We provide turnkey industrial automation solutions using
                  advanced PLC and SCADA technologies, serving industries such
                  as manufacturing, utilities, oil & gas, and services.
                </p>
                <a
                      href="/contact-us"
                      className="btn-red position-relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CONTACT US
                    </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    );
};

export default Cta;
