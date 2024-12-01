// src/components/InnerSectionBanner/InnerSectionBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Innersectionbanner.scss';

const InnerSectionBanner = ({ bgImage, heading, breadcrumb }) => {
  const bannerStyle = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <section className="sub-page-banner" style={bannerStyle}>
      <div className="container custom-container h-100">
        <div className="row h-100">
          <div className="col-md-12 h-100 p-0">
            <div className="banner-content h-100">
              <h1 className="text-white inner-heading">{heading}</h1>
              <div className="breadcrumb">
                <ul className="list-unstyled">
                  {breadcrumb.map((item, index) => (
                    <li key={index}>
                      {item.link ? (
                        <Link to={item.link}>
                          {item.label}
                        </Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

InnerSectionBanner.propTypes = {
  bgImage: PropTypes.string.isRequired, // URL of the background image
  heading: PropTypes.string.isRequired, // Heading text
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired, // Can accept string or JSX (e.g., image)
      link: PropTypes.string, // Breadcrumb link (optional)
    })
  ).isRequired,
};

export default InnerSectionBanner;
