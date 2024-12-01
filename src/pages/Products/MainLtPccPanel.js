import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/common/about-img.png';
import Relatedproducts from "../../components/Relatedproducts/Relatedproducts";
import InnerSectionBanner from "../../components/Innersectionbanner/Innersectionbanner";
import bgImage from "../../assets/img/common/banner/about-bg.png";
import logoIcons from "../../assets/img/common/trackzer-white.svg";
import Team from "../../components/Team/Team";
import Faq from "../../components/Faq/Faq";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials"; // Correctly import the image

const bannerData = {
  bgImage: bgImage,
  heading: 'About Us',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'main-lt-pcc-panel' },
  ],
};

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

const MainLtPccPanel = () => {
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
          <meta name="description" content={description}/>
          <meta name="keywords" content="product, static product, e-commerce, product details"/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={image}/>
          <meta property="og:type" content="website"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
        <InnerSectionBanner {...bannerData} />
        <section className="product-details-main p-tb-80">
          <div className="container custom-container">
            <div className="row">
              <div className="col-md-12 product-details-card">
                <div className="row">
                  {/* Product Image */}
                  <div className="col-md-12 col-lg-6">
                    <div className="product-card">
                      <div className="product-thumbnail">
                        <img src={image} alt={title} className="product-card-image w-100" loading="lazy"/>
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
                  <div className="col-md-12">
                    <div className="product-details">
                      <p className="regular font-18 text-black-80 mb-3">{additionalDescription}</p>
                      <a href={inquiryLink} className="btn-red inquiry" target="_blank" rel="noopener noreferrer">GET A QUOTE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Relatedproducts/>
        <Faq/>
        <Clients/>
        <Cta/>
        <Testimonials/>
      </React.Fragment>
  );
};

export default MainLtPccPanel;
