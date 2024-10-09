import React from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import NHA03 from '../../assets/imgs/DuAn/NHA-0-3.jpg';

const { Title, Paragraph } = Typography;

const Introduction = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Row align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={10} style={{ paddingRight: '10px' }}>
                    <Image
                        src={NHA03}
                        alt="Gia Long Logo"
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            width: '100%', // Ensure image takes full width of the column
                        }}
                        preview={false}
                    />
                </Col>

                <Col xs={24} sm={12} md={14}>
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
