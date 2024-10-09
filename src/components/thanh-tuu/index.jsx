import React from 'react'
import { Typography, Row, Col, Card, Statistic } from 'antd';
import { ProjectOutlined, UserOutlined, TeamOutlined, SmileOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Achievements = () => {
    return (
        <>
            {/* Achievements */}
            <div style={{ backgroundColor: '#f7f7f7', padding: '30px', marginTop: '20px', borderRadius: "18px" }}>
                <Title level={3} style={{ textAlign: 'center', marginTop: '40px', marginBottom: "40px" }}>Thành tựu của chúng tôi</Title>
                <Title level={5} style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px', width: '450px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Sứ mệnh của chúng tôi là tạo nên giá trị bền vững cho khách hàng và cộng đồng thông qua các dự án xây dựng hàng đầu.
                </Title>
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
        </>
    )
}

export default Achievements