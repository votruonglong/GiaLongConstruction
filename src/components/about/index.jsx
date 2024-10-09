import React from 'react';
import { Typography, Row, Col, Card, Image, Statistic } from 'antd';
import { ProjectOutlined, UserOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';
import NhaO2 from '../../assets/imgs/DuAn/NHA-O-1.jpg';
import image1 from '../../assets/imgs/carousel-3.jpg';
import logo from '../../assets/imgs/logo.jpg';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
    return (
        <div style={{ padding: '40px 20px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <Image src={logo} width="120px" />
            </div>
            {/* Introduction */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: "18px" }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Về Gia Long Architecture & Construction</Title>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Image
                            src={image1}
                            alt="Company Building"
                            style={{
                                borderRadius: "12px",
                                maxWidth: "100%", // Allow the image to scale down with the viewport
                                height: "auto",
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <div style={{ padding: '20px' }}>
                            <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                                Gia Long Architecture & Construction được thành lập vào năm 2023, với sứ mệnh cung cấp các giải pháp kiến trúc
                                và xây dựng bền vững cho các dự án nhà ở và thương mại. Với hơn 15 năm kinh nghiệm, chúng tôi đã hoàn thành
                                nhiều dự án quan trọng, góp phần nâng cao chất lượng cuộc sống và môi trường xây dựng tại Việt Nam.
                            </Paragraph>
                            <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                                Chúng tôi tự hào về đội ngũ các kiến trúc sư, kỹ sư, và nhân viên có trình độ cao, nhiệt huyết và sáng tạo, luôn
                                nỗ lực để mang lại các giá trị tốt nhất cho khách hàng.
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* History */}
            <div style={{ backgroundColor: '#ffffff', padding: '20px', marginTop: '20px', borderRadius: "18px" }}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <div style={{ padding: '20px' }}>
                            <Title level={3}>Lịch sử phát triển</Title>
                            <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                                Năm 2023, công ty bắt đầu với chỉ một đội ngũ nhỏ nhưng đầy nhiệt huyết và đã không ngừng phát triển. Những dự án
                                đầu tiên của chúng tôi là các tòa nhà văn phòng tại TP.HCM, và từ đó mở rộng ra khắp cả nước.
                            </Paragraph>
                            <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                                Đến năm 2024, Gia Long Architecture & Construction đã trở thành một trong những công ty hàng đầu trong lĩnh vực
                                kiến trúc và xây dựng tại Việt Nam với các dự án lớn như các khu đô thị, trung tâm thương mại, và các khu nghỉ dưỡng.
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <Image
                            src={image1}
                            alt="Project History"
                            style={{
                                borderRadius: "12px",
                                maxWidth: "100%", // Allow the image to scale down with the viewport
                                height: "auto",
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Col>
                </Row>
            </div>

            {/* Team */}
            <div style={{ backgroundColor: '#ffffff', padding: '20px', marginTop: '20px', borderRadius: "18px" }}>
                <Row gutter={[16, 16]} style={{ marginTop: '40px', justifyContent: 'center' }}>
                    <Col xs={24}>
                        <Title level={3} style={{ textAlign: 'center', marginBottom: "40px" }}>Đội ngũ của chúng tôi</Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable cover={<img alt="CEO" src={NhaO2} style={{ height: "300px", objectFit: 'cover' }} />}>
                            <Card.Meta title="Võ Hải Long" description="CEO & Founder" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card hoverable cover={<img alt="CTO" src={NhaO2} style={{ height: "300px", objectFit: 'cover' }} />}>
                            <Card.Meta title="Võ Thị Trúc Xuân" description="CTO" />
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Achievements */}
            <Row gutter={[16, 16]} style={{ marginTop: '40px', textAlign: 'center' }}>
                <Col xs={24}>
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Thành tựu của chúng tôi</Title>
                </Col>

                {/* Achievement 1 */}
                <Col xs={24} sm={12} md={8}>
                    <Card
                        hoverable
                        style={{
                            padding: '20px',
                            borderRadius: '10px',
                            backgroundColor: '#fafafa',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            height: '100%'
                        }}
                    >
                        <ProjectOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '20px' }} />
                        <Title level={4}>Giải thưởng Kiến trúc Xanh 2018</Title>
                        <Paragraph>
                            Được công nhận với thiết kế bền vững, chúng tôi đạt giải Kiến trúc Xanh 2018 với nhiều dự án tiêu biểu.
                        </Paragraph>
                    </Card>
                </Col>

                {/* Achievement 2 */}
                <Col xs={24} sm={12} md={8}>
                    <Card
                        hoverable
                        style={{
                            padding: '20px',
                            borderRadius: '10px',
                            backgroundColor: '#fafafa',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            height: '100%'
                        }}
                    >
                        <UserOutlined style={{ fontSize: '48px', color: '#faad14', marginBottom: '20px' }} />
                        <Title level={4}>Top 10 Công ty Xây dựng Uy tín 2020</Title>
                        <Paragraph>
                            Chúng tôi tự hào khi được xếp vào top 10 công ty uy tín nhất trong lĩnh vực xây dựng vào năm 2020.
                        </Paragraph>
                    </Card>
                </Col>

                {/* Achievement 3 */}
                <Col xs={24} sm={12} md={8}>
                    <Card
                        hoverable
                        style={{
                            padding: '20px',
                            borderRadius: '10px',
                            backgroundColor: '#fafafa',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            height: '100%'
                        }}
                    >
                        <SmileOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '20px' }} />
                        <Title level={4}>Khách hàng hài lòng 98%</Title>
                        <Paragraph>
                            Với tỷ lệ hài lòng 98% từ khách hàng, chúng tôi tiếp tục nỗ lực mang lại dịch vụ tốt nhất.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutPage;
