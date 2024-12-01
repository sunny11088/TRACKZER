import React from 'react';
import './Team.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'
import teamImage from '../../assets/img/common/team/prajesh.png';

const Team = () => {
  const teamData = [
    {
      id: 1,
      image: teamImage,
      title: 'Prajesh Patel',
      position: 'Founder, Chairman & Chief Executive Officer (CEO)',
    },
    {
      id: 2,
      image: teamImage,
      title: 'Prajesh Patel',
      position: 'Founder, Chairman & Chief Executive Officer (CEO)',
    },
    {
      id: 3,
      image: teamImage,
      title: 'Prajesh Patel',
      position: 'Founder, Chairman & Chief Executive Officer (CEO)',
    },
    {
      id: 4,
      image: teamImage,
      title: 'Prajesh Patel',
      position: 'Founder, Chairman & Chief Executive Officer (CEO)',
    },
  ];
  return (
    <React.Fragment>
        <section className="p-tb-80 bg-gray-10" style={{backgroundColor:'#242222'}}>
          <div className="container custom-container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="text-center">
                  <h2 className="medium font-50 text-white mb-3">Team</h2>
                  <p className="regular font-18 text-white mb-5"
                     style={{maxWidth: '900px', margin: 'auto'}}>
                    We provide cutting-edge automation and technology solutions across various
                    industries, including Food & Beverages, Petroleum, Pharmaceuticals, and more. Our
                    expertise helps optimize production, improve efficiency, and ensure sustainability
                    in diverse sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="team-details-main">
                  <Swiper
                      spaceBetween={30}
                      slidesPerView={4}
                      navigation={true} // Enables the default next/prev buttons
                      pagination={{clickable: true}}
                      loop={true}
                      modules={[Navigation]}
                      speed={1000}
                  >
                    {teamData.map((team) => (
                        <SwiperSlide key={team.id}>
                          <div className="team-card">
                            <div className="team-thumbnail">
                              <img
                                  src={team.image}
                                  alt={team.title}
                                  className="team-card-image w-100"
                                  loading="lazy"
                              />
                            </div>
                            <div className="team-details">
                              <h4 className="medium font-26 text-white mb-2">
                                {team.title}
                              </h4>
                              <p className="regular font-18 text-white mb-0">
                                {team.position}
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

export default Team;
