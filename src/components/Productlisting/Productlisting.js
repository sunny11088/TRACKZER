import React, { useState } from 'react';
import './Productlisting.scss';
import productImage from '../../assets/img/common/about-img.png';

const Productlisting = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const productData = [
    {
      id: 1,
      image: productImage,
      title: 'Product 1',
      description: 'suny This is a short description of Product 1.',
      link: '/products/main-lt-pcc-panel',
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
  ];

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 2);
  };

  return (
    <React.Fragment>
      <section className="p-tb-80">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">Products</h2>
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

          <div className="row">
            {productData.slice(0, visibleProducts).map((product) => (
              <div className="col-md-6" key={product.id}>
                <div className="product-card">
                  <div className="product-thumbnail">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-card-thumbnail w-100"
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
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
          <div className="col-md-12 text-center">
          {visibleProducts < productData.length && (
           <div className="load-more cursor-pointer" onClick={loadMore}>View more products</div>
          )}
          </div>  
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Productlisting;
