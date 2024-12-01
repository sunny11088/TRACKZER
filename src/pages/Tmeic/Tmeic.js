import React from 'react';
import './Tmeic.scss';
import bgImage from '../../../src/assets/img/common/banner/about-bg.png';
import Team from '../../components/Team/Team';
import InnerSectionBanner from '../../components/Innersectionbanner/Innersectionbanner';
import Faq from "../../components/Faq/Faq";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials";
import logoIcons from '../../assets/img/common/trackzer-white.svg';
import about from "../../assets/img/common/about-img.png";
import teamImage from '../../assets/img/common/about-img.png';
const Tmeic = () => {


  const bannerData = {
    bgImage: bgImage, 
    heading: 'About Us',
    breadcrumb: [
      { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
      { label: 'Product', link: '/products' }, 
      { label: 'Product Name' }, 
    ],  
  };
  const bannerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '360px',
    display: 'flex',
    alignItems: 'center',
  };

    const ourdata = [
        {
            number: 250,
            label: 'Clients',
        },
        {
            number: 250,
            label: 'Clients',
        },
        {
            number: 250,
            label: 'Clients',
        },
        {
            number: 250,
            label: 'Clients',
        }
    ];

    const techData = [
        {
            title: "Engineering",
            description: "We provide best-in-class engineering services for all types of electrical panels, ensuring optimal performance and reliability for your plant's electrical infrastructure"
        },
        {
            title: "Technology",
            description: "Our cutting-edge technology keeps us at the forefront of the electrical switchgear industry, delivering advanced solutions that meet the most demanding industrial needs."
        },
        {
            title: "Services",
            description: "From the design and development phase to installation, commissioning, and after-sales support, TRACKZER is with you every step of the way to ensure seamless plant operation."
        },
        {
            title: "Innovation",
            description: "We constantly innovate to adapt to evolving industrial requirements, staying ahead of market dynamics and delivering solutions that cater to modern power management challenges."
        }
    ];


    return (
        <React.Fragment>
            <InnerSectionBanner {...bannerData} />

            <section className="p-tb-80">
                <div className="container custom-container">
                    <div className="row about-us-inner">
                        <div className="col-md-12">
                            <div className="">
                                <div className="medium font-24 text-red mb-2">Trackzer Switchgears Pvt.</div>
                                <div className="medium font-20 text-black-80 mb-2">We manufacture Power and Control
                                    Panel with Industrial Automation Solutions for Quality performance.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-details">
                                <p className="font-16 text-black-80">Trackzer Switchgears Pvt. Ltd. is Group Company
                                    Nexa
                                    Control
                                    System. We are an ISO 9001: 2015 certified leading Instrumentation and Control
                                    System
                                    integrator
                                    Company offering technical solutions and services, covering a wide range of
                                    Industries
                                    and
                                    applications. We manufacture L.T. Panel, PCC Panel, MCC Panel, APFC Panel, FSP
                                    Panel,
                                    MSP Panel,
                                    A.M.F. Panel, Change Over Panel, Meter Panel etc.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-details">
                                <p className="font-16 text-black-80">We offer turnkey integrated industrial automation
                                    solutions based
                                    on state-of-the art PLC and SCADA technologies for a wide range of industrial
                                    automation applications
                                    including manufacturing, utilities, Oil & Gas and Service Industries.
                                    We at Trackzer Switchgears Pvt. Ltd. is offering unmatched quality in LT Panels.
                                    Basically LT Panel is
                                    an electrical distribution board that receives power from generator or transformer
                                    and
                                    distributes the
                                    same to various electronic devices and distribution boards.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="we-have">
                                {ourdata.map((item, index) => (
                                    <div key={index} className="number-of bg-gray-10">
                                        <span
                                            className="number medium font-24 text-red mb-1 d-block">{item.number}</span>
                                        <span className="details medium font-20 text-black-80 mb-2">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-tb-80 bg-gray-10">
                <div className="container custom-container">
                    <div className="row align-items-center">
                        <div className="col-md-6 pe-md-3 pe-lg-5 order-3">
                            <h2 className="medium font-50 text-black mb-3">Quality Commitment at TRACKZER </h2>
                            <ul>
                                <li className="medium font-18 text-black-80 py-1">ISO 9001:2015 Certified</li>
                                <li className="medium font-18 text-black-80 py-1">Stringent Quality Control</li>
                                <li className="medium font-18 text-black-80 py-1">Customer Satisfaction & Repeat
                                    Business
                                </li>
                                <li className="medium font-18 text-black-80 py-1">ISO 9001:2015 Certified</li>
                                <li className="medium font-18 text-black-80 py-1">CE Marking for Customized Projects
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 order-2"></div>
                        <div className="col-md-5 order-1">
                            <div className="">
                                <img src={about} alt="Description of the image" className="img-fluid"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="p-tb-80">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">Transforming Industries for Tomorrow</h2>
                                <p className="regular font-18 text-black-80 mb-5"
                                   style={{maxWidth: '900px', margin: 'auto'}}>
                                    We provide cutting-edge automation and technology solutions across various
                                    industries, including Food & Beverages, Petroleum, Pharmaceuticals, and more. Our
                                    expertise helps optimize production, improve efficiency, and ensure sustainability
                                    in diverse sectors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="tech-details-main">
                                {techData.map((item, index) => (
                                    <div key={index} className="tech-details">
                                        <h3 className="medium font-22 text-black mb-2">{item.title}</h3>
                                        <p className="regular font-16 text-black-80">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="tech-details">
                                <img
                                    src={teamImage}
                                    alt="About Team"
                                    className="team-card-image w-100"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <Team/>
            <Faq/>
            <Clients/>
            <Cta/>
            <Testimonials/>
        </React.Fragment>
    );
};

export default Tmeic;
