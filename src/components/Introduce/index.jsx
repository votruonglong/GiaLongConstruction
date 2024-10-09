import React from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import NHA03 from '../../assets/imgs/DuAn/NHA-0-3.jpg'

const { Title, Paragraph } = Typography;

const Introduction = () => {
    return (
        <div style={{ padding: '40px 20px' }}>
            <Row align="middle" style={{ display: 'flex', alignItems: 'center' }}>
                {/* Giảm padding giữa các cột bằng cách giảm kích thước các cột hoặc điều chỉnh margin */}
                <Col xs={24} md={10} style={{ paddingRight: '10px' }}> {/* Điều chỉnh paddingRight để ảnh gần hơn */}
                    <Image
                        src={NHA03}
                        alt="Gia Long Logo"
                        width="90%"  // Tăng kích thước hình ảnh
                        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        preview={false}
                    />
                </Col>

                <Col xs={24} md={14} style={{ paddingLeft: '10px' }}> {/* Điều chỉnh paddingLeft để nội dung gần hơn */}
                    <Card
                        hoverable
                        style={{
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            height: '100%',
                        }}
                    >
                        <Title level={3} style={{ marginBottom: '20px' }}>Gia Long Construction</Title>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            Chào mừng bạn đến với Gia Long Construction, nơi chúng tôi mang đến các giải pháp xây dựng chất lượng cao và bền vững.
                            Với đội ngũ chuyên gia hàng đầu, chúng tôi luôn cam kết đem lại các công trình kiến trúc đẳng cấp và thân thiện với môi trường.
                        </Paragraph>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            Sứ mệnh của chúng tôi là tạo nên giá trị bền vững cho khách hàng và cộng đồng thông qua các dự án xây dựng hàng đầu.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Introduction;
