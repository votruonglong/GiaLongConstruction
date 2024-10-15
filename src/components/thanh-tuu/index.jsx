import React from 'react';
import { Typography, Row, Col, Card, Statistic } from 'antd';
import { ProjectOutlined, UserOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Achievements = () => {
    return (
        <div style={{ backgroundColor: '#f7f7f7', padding: '20px', marginTop: '20px', borderRadius: "18px" }}>
            <Title level={3} style={{ textAlign: 'center', margin: '20px 0' }}>
                Thành tựu của chúng tôi
            </Title>
            <Title level={5} style={{ textAlign: 'center', marginBottom: '20px', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                Sứ mệnh của chúng tôi là tạo nên giá trị bền vững cho khách hàng và cộng đồng thông qua các dự án xây dựng hàng đầu.
            </Title>

            <Row gutter={[8, 8]} justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Col xs={12} sm={12} md={8} lg={6} xl={5}>
                    <Card
                        style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            padding: '20px',
                            height: '150px', // Chiều cao cố định
                            width: '100%', // Chiều rộng chiếm toàn bộ cột
                        }}
                    >
                        <Statistic
                            title="Dự án hoàn thành"
                            value={250}
                            suffix="+"
                            prefix={<ProjectOutlined style={{ color: '#1890ff', fontSize: '32px' }} />}
                        />
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5}>
                    <Card
                        style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            padding: '20px',
                            height: '150px', // Chiều cao cố định
                            width: '100%', // Chiều rộng chiếm toàn bộ cột
                        }}
                    >
                        <Statistic
                            title="Khách hàng"
                            value={120}
                            suffix="+"
                            prefix={<UserOutlined style={{ color: '#52c41a', fontSize: '32px' }} />}
                        />
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5}>
                    <Card
                        style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            padding: '20px',
                            height: '150px', // Chiều cao cố định
                            width: '100%', // Chiều rộng chiếm toàn bộ cột
                        }}
                    >
                        <Statistic
                            title="Thành viên đội ngũ"
                            value={50}
                            suffix="+"
                            prefix={<TeamOutlined style={{ color: '#faad14', fontSize: '32px' }} />}
                        />
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={5}>
                    <Card
                        style={{
                            background: '#ffffff',
                            borderRadius: '10px',
                            padding: '20px',
                            height: '150px', // Chiều cao cố định
                            width: '100%', // Chiều rộng chiếm toàn bộ cột
                        }}
                    >
                        <Statistic
                            title="Độ hài lòng"
                            value={98}
                            suffix="%"
                            prefix={<SmileOutlined style={{ color: '#eb2f96', fontSize: '32px' }} />}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Achievements;
