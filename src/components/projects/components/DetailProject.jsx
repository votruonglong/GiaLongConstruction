import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Descriptions, Carousel, Typography, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../../redux/features/projectSlice'; // Import fetchProjectById

const { Text } = Typography;

const DetailProject = () => {
    const { id } = useParams(); // Lấy id từ URL
    const dispatch = useDispatch();
    const { project, status } = useSelector((state) => state.projects);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        dispatch(fetchProjectById(id)); // Fetch project by ID khi component mount
    }, [dispatch, id]);

    if (status === "loading") {
        return <div>Loading...</div>; // Loading state
    }

    if (!project) {
        return <div>Project not found</div>; // Nếu không tìm thấy project
    }

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <Carousel autoplay dots afterChange={setCurrentImage}>
                        {Object.values(project.images).map((image, index) => (
                            <div key={index}>
                                <Image
                                    alt={project.title}
                                    src={image}
                                    style={{
                                        borderRadius: '12px',
                                        height: '400px',
                                        objectFit: 'cover',
                                    }}
                                    width="100%"
                                />
                            </div>
                        ))}
                    </Carousel>
                    <Row gutter={8} style={{ marginTop: '10px' }}>
                        {Object.values(project.images).map((image, index) => (
                            <Col span={8} key={index}>
                                <Image
                                    alt={`Thumbnail ${index + 1}`}
                                    src={image}
                                    style={{

                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        border: currentImage === index ? '2px solid #1890ff' : 'none',
                                    }}
                                    width="100%"
                                    onClick={() => setCurrentImage(index)}

                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={24} md={12}>
                    <Card>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <Text strong style={{ fontSize: '24px' }}>{project.title}</Text>
                                <Descriptions bordered layout="vertical">
                                    <Descriptions.Item label="Mã dự án">{project.projectCode}</Descriptions.Item>
                                    <Descriptions.Item label="Diện tích đất">{project.land_area}</Descriptions.Item>
                                    <Descriptions.Item label="Diện tích xây dựng">{project.construction_area}</Descriptions.Item>
                                    <Descriptions.Item label="Địa điểm">{project.location}</Descriptions.Item>
                                    <Descriptions.Item label="Chi phí thi công">{project.construction_cost}</Descriptions.Item>
                                    <Descriptions.Item label="Loại công trình">{project.building_type}</Descriptions.Item>
                                    <Descriptions.Item label="Năm thiết kế">{project.design_year}</Descriptions.Item>
                                    <Descriptions.Item label="Mô tả">{project.description}</Descriptions.Item>
                                </Descriptions>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{ marginTop: '20px', width: '100%' }}
                                >
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
