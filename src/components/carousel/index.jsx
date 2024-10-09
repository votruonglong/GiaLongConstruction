import React from 'react';
import { Image } from 'antd';

import carousel2 from '../../assets/imgs/carousel-2.jpg';
import carousel3 from '../../assets/imgs/carousel-3.jpg';
import carousel4 from '../../assets/imgs/carousel-4.jpg';
import carousel5 from '../../assets/imgs/carousel-5.jpg';

const CarouselPage = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
            <img
                src={carousel3}
                style={{ borderRadius: "12px" }}
                width="1155px"
                height="650px"
            />
        </div>

    );
};

export default CarouselPage;
