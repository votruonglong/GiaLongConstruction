import React from 'react'
import { Card, Col, Pagination, Row } from 'antd';
import SingleProject from '../single-project';
import { useState } from 'react';
import SearchComponent from '../search-component';
import NhaO1 from '../../assets/imgs/DuAn/NHA-O-1.jpg'
import NhaO2 from '../../assets/imgs/DuAn/NHA-O-2.jpg'
import NhaO3 from '../../assets/imgs/DuAn/NHA-0-3.jpg'



const projects = [
    {
        id: 1,
        title: 'Nhà ở gia đình',
        description: 'Nhà ở gia đình',
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
            <SearchComponent
                searchFields={[

                    {
                        key: "codeDefectSearch",
                        placeholder: "Chọn loại nhà",
                        type: "select",
                    }
                ]}

            />
            <h2 style={{ fontSize: "26px", marginTop: "10px" }}>DỰ ÁN</h2>
            <Row gutter={16}>
                {currentTours.map((project) => (
                    <SingleProject project={project} key={project.id} />
                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={projects.length}
                onChange={handleChangePage}
                style={{ textAlign: 'center', marginTop: '20px' }}
            />

        </div>
    )
}

export default ProjectsPage