import React from 'react';
import './Clients.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'
import ind from "../../assets/img/common/clients/cli.png";

// Define the JSON data directly within the component
const clientData = [
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" },
  { "image": ind, "imageAlt": "Client Logo" }
];

const Clients = () => {
  return (
    <React.Fragment>
      <section className="p-tb-80 bg-gray-10">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">Our Clients</h2>
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
            <div className="col-md-12 overflow-hidden">
              <div className="cli-slider position-relative">
              <Swiper
                  spaceBetween={30}
                  navigation={true} // Enables the default next/prev buttons
                  loop={true}
                  modules={[Navigation]} 
                  autoplay={true}
                  speed={700}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.15,
                      spaceBetween: 15,
                    },
                    767: {
                      slidesPerView: 1.5, // 1.5 slides per view for mobile
                    },
                    991: {
                      slidesPerView: 4.5, // 4.5 slides per view for tablet
                    },
                    1024: {
                      slidesPerView: 6, // 6 slides per view for larger screens
                    },
                  }}
                >
                  {clientData.map((client, index) => (
                    <SwiperSlide key={index}>
                      <div className="client-card">
                        <div className="client-imgs">
                          <img
                            src={client.image}
                            alt={client.imageAlt}
                            className="client-image img-fluid"
                          />
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

export default Clients;
