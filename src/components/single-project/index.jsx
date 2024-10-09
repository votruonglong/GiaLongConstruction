import React from 'react'
import { Col, Card } from 'antd'
import { Link } from 'react-router-dom'

const SingleProject = ({ project }) => {
    return (
        <Col xs={24} sm={12} md={8} lg={6} style={{ padding: '10px' }}>
            <Link to={`/duan/${project.id}`}>
                <Card
                    style={{ height: '420px' }}
                    hoverable
                    cover={
                        <img
                            alt={project.title}
                            src={project.images?.imageUrl1}
                            style={{
                                height: '200px',  // Chiều cao cố định cho ảnh
                                objectFit: 'cover',  // Đảm bảo ảnh vừa với kích thước nhưng vẫn giữ tỷ lệ
                                width: '100%'  // Đảm bảo ảnh chiếm hết chiều rộng của Card
                            }}
                        />
                    }

                >
                    <Card.Meta title={project.title} description={project.description} />
                </Card>
            </Link>

        </Col >
    )
}

export default SingleProject