import React from 'react';
import { Image } from 'antd';

import carousel2 from '../../assets/imgs/carousel-2.jpg';
import carousel3 from '../../assets/imgs/carousel-3.jpg';
import carousel4 from '../../assets/imgs/carousel-4.jpg';
import carousel5 from '../../assets/imgs/carousel-5.jpg';
import './carousel.css'

const CarouselPage = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
            <img
                src={carousel3}
                alt="Carousel"
                style={{
                    borderRadius: "12px",
                    maxWidth: "100%", // Allow the image to scale down with the viewport
                    height: "auto", // Maintain aspect ratio
                }}
            />
        </div>


    );
};

export default CarouselPage;
