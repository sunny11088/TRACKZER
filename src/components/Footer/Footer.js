import React from 'react';
// import logo from '../../assets/imgs/logo.svg';
import trackzerlogo from './../../assets/img/common/trackzer-footer-logo.svg'
import {Link} from "react-router-dom";
import facebookIcon from "../../assets/img/common/facebook.svg";
import linkedinIcon from "../../assets/img/common/linkedin.svg";
const Footer = () => {
  return (
    <React.Fragment>
    <footer className="sec-footer overflow-hidden p-tb-80 pb-0">
    <div className="container custom-container">
        <div className="row">
            <div className="col-md-12">
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="logo-wrap mb-2">
                            <img src={trackzerlogo} alt={"trackzer logo"} className="footer-logo img-fluid" loading="lazy" />
                        </div>
                        <p className="m-0 font-16 light">Trackzer Switchgears Pvt. Ltd. is a group company of [Parent Company Name]. We are an ISO 9001:2015 certified leader in instrumentation and control system integration,  offering a wide array of technical solutions and services across various industries and applications.</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-top first">
                            <div className="item">
                                <div className="footer-nav">
                                    <span className="d-block font-24 font-500 mb-2 mb-lg-3">Company</span>
                                    <ul>
                                        <li><a href="#services" className="font-16 light">Home</a></li>
                                        <li><a href="#works" className="font-16 light">About us</a></li>
                                        <li><a href="#works" className="font-16 light">Products</a></li>
                                        <li><a href="#testimonials" className="font-16 light">Certificates</a></li>
                                        <li><a href="#testimonials" className="font-16 light">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="footer-nav">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="d-block font-24 font-500 mb-2 mb-lg-3">Products</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="ml-links">
                                                <li><Link to="/products/main-lt-pcc-panel" className="font-16 light">Main LT PCC Panel</Link></li>
                                                <li><Link to="/products/hvac-mcc-panel" className="font-16 light">HVAC MCC Panel</Link></li>
                                                <li><Link to="/products/apfc-500kvar-panel" className="font-16 light">500KVAR APFC Panel</Link></li>
                                                <li><Link to="/products/ups-pdb-panel" className="font-16 light">UPS PDB Panel</Link></li>
                                                <li><Link to="/products/process-mcc-panel" className="font-16 light">Process MCC Panel</Link></li>
                                                <li><Link to="/products/mcc-vfd-feeder-panel" className="font-16 light">MCC VFD Feeder Panel</Link></li>
                                                <li><Link to="/products/air-compressor-mcc-panel" className="font-16 light">Air Compressor MCC Panel</Link></li>
                                                <li><Link to="/products/plant-mldb-panel" className="font-16 light">Plant MLDB Panel</Link></li>
                                                <li><Link to="/products/water-system-mcc-panel" className="font-16 light">Water System MCC Panel</Link></li>
                                                <li><Link to="/products/solvent-mcc-panel" className="font-16 light">Solvent MCC Panel</Link></li>
                                                {/*<li><a href="" className="font-16 light">More Products</a></li>*/}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <span className="footer-seprate"></span>
                        <div className="footer-right-top last">
                            <div className="item">
                                <div className="footer-nav">
                                    <span className="d-block font-24 font-500 mb-2 mb-lg-3">Contact us</span>
                                    <ul>
                                        <li><a
                                            href="mailto:psp@trackzer.in" className="regular font-16 text-black-80"
                                            aria-label="Send email to Prajesh Patel">psp@trackzer.in</a></li>
                                        <li><a
                                            href="mailto:info@trackzer.in" className="regular font-16 text-black-80"
                                            aria-label="Send email to Prajesh Patel"> info@trackzer.in</a></li>
                                        <li><a
                                            href="tel:+919662690086" className="regular font-16 text-black-80"
                                            aria-label="Call Prajesh Patel">+91 96626 90086</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="footer-nav">
                                    <span className="d-block font-24 font-500 mb-2 mb-lg-3">Address</span>
                                    <p className="m-0 font-16 light add">Plot No.157, NK - 3
                                        Industrial Park, Near
                                        Bujrang Bakrol Village, Ahmedabad,
                                        Gujarat - 382430</p>
                                </div>
                                <div className="footer-nav  d-xl-block">
                                    <span className="d-block font-24 font-500 mb-2 mb-lg-3">Follow us</span>
                                    <ul className="socials">
                                        <li> <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <span className="connect-icon">
                                                    <img src={facebookIcon} alt="Facebook" className="social-icon"/>
                                                </span>
                                        </Link></li>
                                        <li><Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                <span className="connect-icon">
                                                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon"/>
                                                </span>
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-right-top d-block d-xl-none social-links">
                            <div className="item">
                                <div className="footer-nav">
                                    <span className="d-block font-24 font-500 mb-2 mb-lg-3">Follow us</span>
                                    <ul className="socials">
                                        <li><a href="">Facebook</a></li>
                                        <li><a href="">In</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="copy-right">
                    <div className="copy-right-inner font-14 light">Copyright © 2024. Itech infotech All Rights
                        Reserved.
                    </div>
                    <div className="about-company d-none">
                        <ul className="">
                            <li><a href="" className="font-14 light">Terms & Condition</a></li>
                            <li><a href="" className="font-14 light">Career</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </React.Fragment>
  );
};

export default Footer;
