import React from 'react';
import './Relatedproducts.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'
import productImage from '../../assets/img/common/about-img.png';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonials/Testimonials';


const Relatedproducts = () => {
  const productData = [
    {
      id: 1,
      image: productImage,
      title: 'Product 1',
      description: 'This is a short description of Product 1.',
      link: '/product-1-details',
    },
    {
      id: 2,
      image: productImage,
      title: 'Product 2',
      description: 'This is a short description of Product 2.',
      link: '/product-2-details',
    },
    {
      id: 3,
      image: productImage,
      title: 'Product 3',
      description: 'This is a short description of Product 3.',
      link: '/product-3-details',
    },
    {
      id: 4,
      image: productImage,
      title: 'Product 4',
      description: 'This is a short description of Product 4.',
      link: '/product-4-details',
    },
    {
      id: 5,
      image: productImage,
      title: 'Product 5',
      description: 'This is a short description of Product 5.',
      link: '/product-5-details',
    },
    {
      id: 6,
      image: productImage,
      title: 'Product 6',
      description: 'This is a short description of Product 6.',
      link: '/product-6-details',
    },
  ];
  return (
    <React.Fragment>
      <section className="related-products p-tb-80 bg-gray-10">
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">Features Products</h2>
                <p
                  className="regular font-18 text-black-80 mb-5"
                  style={{ maxWidth: '900px', margin: 'auto' }}
                >
                  We provide turnkey industrial automation solutions using
                  advanced PLC and SCADA technologies, serving industries such
                  as manufacturing, utilities, oil & gas, and services.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  navigation={true} // Enables the default next/prev buttons
                  pagination={{ clickable: true }}
                  loop={true}
                  modules={[Navigation]} 
                  speed={1000}
                >
                  {productData.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="product-card">
                        <div className="product-thumbnail">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="product-card-image w-100"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h4 className="medium font-26 text-black mb-2">
                            {product.title}
                          </h4>
                          <p className="regular font-18 text-black-80 mb-3">
                            {product.description}
                          </p>
                          <a
                            href={product.link}
                            className="btn-red"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Relatedproducts;
