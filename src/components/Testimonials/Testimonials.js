import React from 'react';
import './Testimonials.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'
import clientLogo1 from "../../assets/img/common/clients/cli.png";
import clientLogo2 from "../../assets/img/common/clients/cli.png";
import clientLogo3 from "../../assets/img/common/clients/cli.png";
import clientLogo4 from "../../assets/img/common/clients/cli.png";

const clientData = [
  {
    image: clientLogo1,
    imageAlt: "Client Logo 1",
    name: "Dipal Shah",
    designation: "Project Manager",
    testimonial:
      "We provide turnkey industrial automation solutions using advanced PLC and SCADA technologies, serving industries such as manufacturing, utilities, oil & gas, and services.",
  },
  {
    image: clientLogo2,
    imageAlt: "Client Logo 2",
    name: "Rahul Mehta",
    designation: "CEO, Tech Solutions",
    testimonial:
      "Their expertise in industrial automation has transformed our production processes, ensuring efficiency and scalability.",
  },
  {
    image: clientLogo3,
    imageAlt: "Client Logo 3",
    name: "Anita Sharma",
    designation: "Operations Head",
    testimonial:
      "Their advanced automation technologies have significantly improved our operations, offering reliability and precision.",
  },
  {
    image: clientLogo4,
    imageAlt: "Client Logo 4",
    name: "John Doe",
    designation: "CTO, Innovatech",
    testimonial:
      "The team delivered exceptional solutions tailored to our business needs. Highly professional and skilled in their domain.",
  },
  {
    image: clientLogo1,
    imageAlt: "Client Logo 5",
    name: "Emily Brown",
    designation: "Director, Smart Industries",
    testimonial:
      "Their SCADA technologies helped us monitor and control our systems effectively. The implementation was seamless.",
  },
  {
    image: clientLogo2,
    imageAlt: "Client Logo 6",
    name: "Michael Johnson",
    designation: "Engineering Lead",
    testimonial:
      "A highly reliable partner for industrial automation needs. They exceeded our expectations with their innovative solutions.",
  },
];

const Testimonials = () => {
  return (
    <React.Fragment>
      <section className="p-tb-80">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">What Our Clients Say</h2>
                <p
                  className="regular font-18 text-black-80 mb-5"
                  style={{ maxWidth: "900px", margin: "auto" }}
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
              <div className="testimonial-slider position-relative">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2} // Show 2 slides by default
                  navigation={true} // Enables the default next/prev buttons
                  loop={true}
                  modules={[Navigation]} 
                  autoplay={true}
                  speed={700}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // 1 slide on mobile
                    },
                    768: {
                      slidesPerView: 1.5, // 1.5 slides on mobile
                    },
                    991: {
                      slidesPerView: 2, // 2 slides on tablet
                    },
                  }}
                >
                  {clientData.map((client, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-card">
                        <div className="testimonial-imgs">
                          <img
                            src={client.image}
                            alt={client.imageAlt}
                            className="testimonial-image img-fluid"
                          />
                          <div className="medium font-20 text-red mt-3">
                            {client.name}
                          </div>
                          <div className="regular font-18 text-black">
                            {client.designation}
                          </div>
                        </div>

                        <div className="testimonial-details">
                          <p className="regular font-18 text-black-80">
                            {client.testimonial}
                          </p>
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

export default Testimonials;
