import React from 'react'
import { Card, Col, Pagination, Row, Typography } from 'antd';
import SingleProject from '../single-project';
import { useState } from 'react';
import SearchComponent from '../search-component';
import NhaO1 from '../../assets/imgs/DuAn/NHA-O-1.jpg'
import NhaO2 from '../../assets/imgs/DuAn/NHA-O-2.jpg'
import NhaO3 from '../../assets/imgs/DuAn/NHA-0-3.jpg'

const { Title } = Typography

const projects = [
    {
        id: 1,
        title: 'Thành house - Nhà cấp 4 sân vườn đẹp, thư giãn',
        description: 'Thiết kế nhà cấp 4 có sân vườn, không gian chill thư giãn, 3 phòng ngủ, phòng khách, bếp ăn.',
        image: NhaO1,
    },
    {
        id: 2,
        title: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        description: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        image: NhaO2,
    },
    {
        id: 3,
        title: 'Nhà ở gia đình',
        description: 'Nhà ở gia đình',
        image: NhaO3,
    },
    {
        id: 4,
        title: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        description: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        image: NhaO3,
    },
    {
        id: 5,
        title: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        description: 'Nhà ở 2 mặt tiền kết hợp kinh doanh',
        image: 'https://via.placeholder.com/300x200.png?text=Nhà+Ở+2+Mặt+Tiền',
    },
    {
        id: 6,
        title: 'Nhà ở gia đình',
        description: 'Nhà ở gia đình',
        image: 'https://via.placeholder.com/300x200.png?text=Nhà+Ở+Gia+Đình',
    },
    {
        id: 7,
        title: 'Nhà ở gia đình',
        description: 'Nhà ở gia đình',
        image: 'https://via.placeholder.com/300x200.png?text=Nhà+Ở+Gia+Đình',
    },
];

const ProjectsPage = () => {

    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const pageSize = 8; // Số lượng mục trên mỗi trang

    // Lấy các tour cho trang hiện tại
    const currentTours = projects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Hàm thay đổi trang
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };
    return (

        <div style={{ padding: '20px' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: '40px', marginBottom: "40px" }}>Dự án nổi bậc</Title>
            <SearchComponent
                searchFields={[

                    {
                        key: "codeDefectSearch",
                        placeholder: "Chọn loại nhà",
                        type: "select",
                    }
                ]}

            />
            <Row gutter={16}>
                {currentTours.map((project) => (
                    <Col key={project.id} span={4} style={{ marginTop: "20px", padding: "5px" }} xs={12} sm={8} md={6} lg={4}>
                        <SingleProject project={project} />
                    </Col>

                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={projects.length}
                onChange={handleChangePage}
                style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
            />

        </div>
    )
}

export default ProjectsPage