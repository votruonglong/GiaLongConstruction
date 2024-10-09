import React from 'react';
import { Form, Input, Button, Row, Col, Typography, Card, List } from 'antd';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
        // Xử lý gửi thông tin liên hệ
    };

    return (
        <div style={{ padding: '40px 20px' }}>
            <Title level={2} style={{ textAlign: 'center', color: "#16a34a" }}>Liên hệ với chúng tôi</Title>
            <Title level={5} style={{ textAlign: 'center', marginBottom: '40px' }}>Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi bất cứ lúc nào.</Title>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={12}>
                    <Card style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Title level={4} style={{ textAlign: 'center' }}>Thông tin liên hệ</Title>
                        <List
                            bordered
                            dataSource={[
                                { icon: <HomeOutlined />, text: 'Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM' },
                                { icon: <PhoneOutlined />, text: 'Điện thoại: +84 123 456 789' },
                                { icon: <MailOutlined />, text: 'Email: info@gialong.com.vn' },
                            ]}
                            renderItem={item => (
                                <List.Item style={{ display: 'flex', alignItems: 'center' }}>
                                    {item.icon}
                                    <Paragraph style={{ margin: '0 0 0 10px' }}>{item.text}</Paragraph>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Card style={{ padding: '20px', borderRadius: '10px' }}>
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Form.Item
                                label="Tên của bạn"
                                name="name"
                                rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email của bạn"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nội dung"
                                name="message"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Gửi
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ContactPage;
