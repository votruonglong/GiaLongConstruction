import React from 'react';
import { Card, Row, Col, Button, Descriptions, Carousel, Collapse, Typography, DatePicker, Table } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const { Panel } = Collapse;
const { Title, Text } = Typography;

const projects = [
    {
        id: 1,
        title: 'Nhà ở',
        description: 'Isoprene is synthesized from mixed linear butenes (butene-1 and butene-2) by catalytically isomerizing said mixed linear butenes to a mixture of cis and trans butene-2, hydroformylating the butene-2',
        price: 3200000,
        code: 'HNMCOTP-M023-24',
        NamThietKe: 2024,
        LoaiCongTrinh: "Nhà ở",
        DiaDiem: 'Nha Trang',
        DienTichDat: '129,7 m2',
        DienTichXayDung: '100 m2',
        images: [
            'https://via.placeholder.com/600x400.png?text=Nhà+Ở+1',
            'https://via.placeholder.com/600x400.png?text=Nhà+Ở+2',
            'https://via.placeholder.com/600x400.png?text=Nhà+Ở+3',
        ],
    },
    {
        id: 2,
        title: 'Tour Đà Nẵng - Hội An',
        description: 'Trải nghiệm bãi biển Đà Nẵng và phố cổ Hội An.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
    {
        id: 3,
        title: 'Tour Nha Trang',
        description: 'Thư giãn tại các bãi biển đẹp và thưởng thức hải sản tươi sống.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
    {
        id: 4,
        title: 'Tour Sapa',
        description: 'Khám phá những thửa ruộng bậc thang và văn hóa dân tộc thiểu số.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
    {
        id: 5,
        title: 'Tour Sapa',
        description: 'Khám phá những thửa ruộng bậc thang và văn hóa dân tộc thiểu số.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
    {
        id: 6,
        title: 'Tour Sapa',
        description: 'Khám phá những thửa ruộng bậc thang và văn hóa dân tộc thiểu số.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
    {
        id: 7,
        title: 'Tour Sapa',
        description: 'Khám phá những thửa ruộng bậc thang và văn hóa dân tộc thiểu số.',
        price: 3200000,
        images: [
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+1',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+2',
            'https://via.placeholder.com/600x400.png?text=Hà+Nội+3',
        ],
    },
];

const DetailProject = () => {

    const dataSource = projects.map((project) => ({
        key: project.id,  // Thêm key cho bảng
        id: project.id,
        title: project.title,
        description: project.description,
        price: project.price,
        code: project.code,
        NamThietKe: project.NamThietKe,
        DienTichDat: project.DienTichDat,
        DienTichXayDung: project.DienTichXayDung,
        LoaiCongTrinh: project.LoaiCongTrinh,
        DiaDiem: project.DiaDiem,
        images: project.images
    }));
    const { id } = useParams()

    const [project, setProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0); // Chỉ số hình ảnh hiện tại
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        // Tìm tour tương ứng với id
        const selectedTour = dataSource.find(t => t.id === parseInt(id));
        setProject(selectedTour);
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16}>
                {/* Hình ảnh tour */}
                <Col xs={24} md={12}>
                    <Carousel
                        autoplay
                        dots
                        afterChange={setCurrentImage}
                    >
                        {project.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    alt={project.title}
                                    src={image}
                                    style={{ width: '100%', borderRadius: '12px', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                    <Row gutter={8} style={{ marginTop: '10px' }}>
                        {project.images.map((image, index) => (
                            <Col span={8} key={index}>
                                <img
                                    alt={`Thumbnail ${index + 1}`}
                                    src={image}
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        border: currentImage === index ? '2px solid #1890ff' : 'none'
                                    }}
                                    onClick={() => setCurrentImage(index)} // Thay đổi hình ảnh hiện tại khi click
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/* Thông tin chi tiết về tour */}
                <Col xs={24} md={12}>
                    <Card>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <Text strong style={{ fontSize: '24px' }}>{project.title}</Text>
                                <Descriptions bordered layout="vertical">
                                    <Descriptions.Item label="Mã dự án">{project.code}</Descriptions.Item>
                                    <Descriptions.Item label="Diện tích đất">{project.DienTichDat}</Descriptions.Item>
                                    <Descriptions.Item label="Diện tích xây dựng">{project.DienTichXayDung}</Descriptions.Item>
                                    <Descriptions.Item label="Địa điểm">{project.DiaDiem}</Descriptions.Item>
                                    <Descriptions.Item label="Chi phí thi công">{project.price}</Descriptions.Item>
                                    <Descriptions.Item label="Loại công trình">{project.LoaiCongTrinh}</Descriptions.Item>
                                    <Descriptions.Item label="Năm thiết kế">{project.NamThietKe}</Descriptions.Item>
                                </Descriptions>
                                <Button type="primary" size="large" style={{ marginTop: '20px', alignItems: "end" }}>
                                    Liên hệ ngay
                                </Button>
                            </div>
                        </div>
                    </Card>

                </Col>

            </Row>
        </div>
    );
};



export default DetailProject;
