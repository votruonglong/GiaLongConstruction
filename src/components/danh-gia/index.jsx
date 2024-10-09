import React from 'react';
import { Card, Row, Col, Avatar, Typography, Rate } from 'antd';

const { Paragraph, Title } = Typography;

const customerReviews = [
    {
        id: 1,
        name: 'Võ Trường Long',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        review: 'Dịch vụ xây dựng tuyệt vời, rất hài lòng với công trình của Gia Long.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Võ Hải Long',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        review: 'Chất lượng công trình rất tốt, đội ngũ làm việc chuyên nghiệp.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Park Chaeyoung',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        review: 'Tôi rất hài lòng với tiến độ và chất lượng của dự án.',
        rating: 5,
    },
    {
        id: 4,
        name: 'LALISA',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        review: 'Đội ngũ nhân viên nhiệt tình và chuyên nghiệp, dự án hoàn thành đúng tiến độ.',
        rating: 4,
    },
    {
        id: 5,
        name: 'Kim Jenny',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        review: 'Công ty rất uy tín và chất lượng trong việc thi công các công trình lớn.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Kim Jisoo',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        review: 'Tôi sẽ tiếp tục hợp tác với Gia Long trong các dự án tương lai.',
        rating: 4,
    },
];

const CustomerReviews = () => {
    return (
        <div style={{ padding: '40px 20px', backgroundColor: "#f7f7f7", borderRadius: "12px" }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Đánh giá khách hàng</Title>
            <Row gutter={[16, 16]}>
                {customerReviews.map((review) => (
                    <Col xs={24} sm={12} md={8} key={review.id}>
                        <Card
                            hoverable
                            style={{
                                textAlign: 'center',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Avatar src={review.avatar} size={64} style={{ marginBottom: '20px' }} />
                            <Title level={4}>{review.name}</Title>
                            <Rate disabled defaultValue={review.rating} style={{ marginBottom: '10px' }} />
                            <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>{review.review}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CustomerReviews;
