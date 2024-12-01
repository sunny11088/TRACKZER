import React from 'react';
import { Helmet } from 'react-helmet';
import './Pdetails.scss';
import productImage from '../../assets/img/common/about-img.png'; // Correctly import the image
import Relatedproducts from '../../components/Relatedproducts/Relatedproducts';

// Embedded JSON data
const productData = {
  title: "Static Product Title",
  description: "This is a static description for the product. It is not loaded from JSON.",
  specialFeatures: [
    "badj shf jksfbjds fdsbfjkd f",
    "asdbadb aiudsa asdbj kbjsdfjk f",
    "badad adb aiudsa asdbj",
    "asddfbadb aiudsa asdbj",
    "rtr tbadb aiudsa asdbj hvhsdbfjks fjdsbf"
  ],
  additionalDescription: "This is a static description for the product. It is not loaded from JSON. This is a static description for the product. It is not loaded from JSON.",
  image: productImage,
  inquiryLink: "https://example.com/static-link"
};

const Pone = () => {
  const {
    title,
    description,
    specialFeatures,
    additionalDescription,
    image,
    inquiryLink
  } = productData;

  return (
    <React.Fragment>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="product, static product, e-commerce, product details" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Relatedproducts/>
      {/* Product Details Section */}
      <section className="product-details-main d-none">
        <div className="container custom-container">
          <div className="row">
            <div className="col-md-12 product-details-card">
              <div className="row">
                {/* Product Image */}
                <div className="col-md-12 col-lg-6">
                  <div className="product-card">
                    <div className="product-thumbnail">
                      <img src={image} alt={title} className="product-card-image w-100" loading="lazy" />
                    </div>
                  </div>
                </div>
                {/* Product Details */}
                <div className="col-md-12 col-lg-6">
                  <div className="product-details">
                    <h4 className="medium font-28 text-black mb-2">{title}</h4>
                    <p className="regular font-18 text-black-80">{description}</p>
                  </div>
                  <div className="product-details mt-15">
                    <div className="btn-red-features">Special Features</div>
                    <ul className="special-features">
                      {specialFeatures.map((feature, index) => (
                        <li key={index} className="regular font-16 text-black-80">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Additional Description and Inquiry */}
                <div className="col-md-12 mt-15">
                  <div className="product-details">
                    <p className="regular font-18 text-black-80 mb-3">{additionalDescription}</p>
                    <a href={inquiryLink} className="btn-red inquiry" target="_blank" rel="noopener noreferrer">Inquiry now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Pone;
