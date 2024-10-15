import React from 'react'
import { Col, Card, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography;

const SingleProject = ({ project }) => {
    return (
        <Card
            hoverable
            style={{
                width: '100%', // Đặt chiều rộng 100% để phù hợp với kích thước của cột
                maxWidth: 220, // Chiều rộng tối đa cho card
                height: 300,
                overflow: 'hidden'
            }}
            cover={
                <img
                    alt={project.title}
                    src={project.image}
                    style={{
                        height: "200px",
                        objectFit: "cover"
                    }}
                />}
        >
            <Card.Meta
                title={<Title level={5}>{project.title}</Title>}
                description={
                    <Paragraph style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginBottom: 0, // Để loại bỏ margin dưới cùng
                    }}>
                        {project.description}
                    </Paragraph>
                }
            />
        </Card>
    )
}

export default SingleProject
