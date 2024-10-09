import React from 'react';
import { Typography, Row, Col, Card, Image, Statistic } from 'antd';
import { ProjectOutlined, UserOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';
import NhaO2 from '../../assets/imgs/DuAn/NHAO1.jpg';
import image1 from '../../assets/imgs/carousel-3.jpg';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
    return (
        <div style={{ padding: '40px 20px' }}>
            {/* Introduction */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: "18px" }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Về Gia Long Architecture & Construction</Title>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Image
                            src={image1}
                            alt="Company Building"
                            style={{
                                borderRadius: '10px',
                                objectFit: 'cover',
                                width: '100%',
                                height: '400px',
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
                                borderRadius: '10px',
                                objectFit: 'cover',
                                width: '100%',
                                height: '400px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Col>
                </Row>
            </div>

            {/* Achievements */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '30px', marginTop: '20px', borderRadius: "18px" }}>
                <Title level={3} style={{ textAlign: 'center', marginTop: '40px', marginBottom: "40px" }}>Thành tựu của chúng tôi</Title>
                <Row gutter={[16, 16]} justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            style={{ background: '#ffffff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Statistic
                                title="Dự án hoàn thành"
                                value={250}
                                prefix={<ProjectOutlined style={{ color: '#1890ff', fontSize: '32px' }} />}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            style={{ background: '#ffffff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Statistic
                                title="Khách hàng"
                                value={120}
                                prefix={<UserOutlined style={{ color: '#52c41a', fontSize: '32px' }} />}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            style={{ background: '#ffffff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Statistic
                                title="Thành viên đội ngũ"
                                value={50}
                                prefix={<TeamOutlined style={{ color: '#faad14', fontSize: '32px' }} />}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Card
                            style={{ background: '#ffffff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Statistic
                                title="Khách hàng hài lòng"
                                value={98}
                                suffix="%"
                                prefix={<SmileOutlined style={{ color: '#eb2f96', fontSize: '32px' }} />}
                            />
                        </Card>
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
                        <Card hoverable cover={<img alt="CEO" src={NhaO2} style={{ height: "300px", objectFit: 'cover' }} />}>
                            <Card.Meta title="Võ Thị Trúc Xuân" description="CTO" />
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Achievements */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '20px', marginTop: '20px', textAlign: 'center', borderRadius: "18px" }}>
                <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
                    <Col xs={24}>
                        <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>Thành tựu của chúng tôi</Title>
                    </Col>

                    {/* Achievement 1 */}
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            style={{
                                padding: '20px',
                                borderRadius: '10px',
                                backgroundColor: '#ffffff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Title level={4}>Dự án 1</Title>
                            <Paragraph>
                                Mô tả ngắn gọn về dự án 1 và những thành tựu đạt được.
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
                                backgroundColor: '#ffffff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Title level={4}>Dự án 2</Title>
                            <Paragraph>
                                Mô tả ngắn gọn về dự án 2 và những thành tựu đạt được.
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
                                backgroundColor: '#ffffff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Title level={4}>Dự án 3</Title>
                            <Paragraph>
                                Mô tả ngắn gọn về dự án 3 và những thành tựu đạt được.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutPage;
