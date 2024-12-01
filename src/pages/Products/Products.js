import React from 'react';
import './Products.scss';
import InnerSectionBanner from "../../components/Innersectionbanner/Innersectionbanner";
import bgImage from "../../assets/img/common/banner/about-bg.png";
import logoIcons from "../../assets/img/common/trackzer-white.svg";
import Productlisting from "../../components/Productlisting/Productlisting";
import Relatedproducts from "../../components/Relatedproducts/Relatedproducts";
const Products = () => {
    const bannerData = {
        bgImage: bgImage,
        heading: 'Our Products',
        breadcrumb: [
            { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
            { label: 'Product', link: '/products' },
            { label: 'Product Name' },
        ],
    };
    return (
        <React.Fragment>
            <InnerSectionBanner {...bannerData} />
                <Productlisting/>
                <Relatedproducts/>
        </React.Fragment>
    );
};

export default Products;
