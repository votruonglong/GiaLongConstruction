import React from 'react'
import { Card, Col, Pagination, Row, Typography } from 'antd';
import SingleProject from '../single-project';
import { useState, useEffect } from 'react';
import SearchComponent from '../search-component';
import NhaO1 from '../../assets/imgs/DuAn/NHA-O-1.jpg'
import NhaO2 from '../../assets/imgs/DuAn/NHA-O-2.jpg'
import NhaO3 from '../../assets/imgs/DuAn/NHA-0-3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../redux/features/projectSlice';
import { setPage, setPageSize } from '../../redux/features/projectSlice';


const { Title } = Typography

const ProjectsPage = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()


    const { projects, currentPage, pageSize, totalCount } = useSelector(
        (state) => state.projects
    )

    console.log(projects);


    const getListProjects = async () => {
        try {
            setLoading(true)
            await dispatch(
                fetchProject()
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getListProjects()
    }, [dispatch, currentPage, pageSize])

    const handlePaginateChange = (page, pageSize) => {
        dispatch(setPage(page));
        dispatch(setPageSize(pageSize));
    };


    return (

        <div style={{ padding: '20px' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: '40px', marginBottom: "40px" }}>Dự án nổi bậc</Title>
            <SearchComponent
                searchFields={[

                    {
                        key: "codeDefectSearch",
                        placeholder: "Chọn loại nhà",
                        type: "select",
                    }
                ]}

            />
            <Row gutter={16}>
                {projects.map((project) => (
                    <SingleProject project={project} key={project.id} />
                ))}
            </Row>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={totalCount}
                onChange={handlePaginateChange}
                style={{ textAlign: 'center', marginTop: '20px' }}
            />

        </div>
    )
}

export default ProjectsPage