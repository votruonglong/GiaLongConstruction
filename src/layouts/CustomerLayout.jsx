import React from 'react'
import {
    Breadcrumb,
    Layout,
    Menu,
    theme,
    Dropdown,
    Space,
    Tag,
    Avatar,
    Button
} from 'antd'
import {
    HomeOutlined,
    ProjectOutlined,
    ContactsOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import hat from "../assets/hat.svg";
import { useLocation, Link, Outlet } from 'react-router-dom';
import HomePage from '../pages/home';
import UserDropdown from '../components/user-dropdown';
import { useState } from 'react';
import CarouselPage from '../components/carousel';



const { Header, Content, Footer } = Layout;





const CustomerLayout = () => {



    const [isLogin, setIsLogin] = useState(false)


    const items = [
        {
            label: <Link to="/">Trang chủ</Link>,
            key: '1',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/duan">Dự án</Link>,
            key: '2',
            icon: <ProjectOutlined />,
        },
        {
            label: <Link to="/contact">Liên hệ</Link>,
            key: '3',
            icon: <ContactsOutlined />,
        },
        {
            label: <Link to="/about">Về chúng tôi</Link>,
            key: '4',
            icon: <CheckCircleOutlined />,
        },
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation()

    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
        ...pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{pathSnippets[index]}</Link>
                </Breadcrumb.Item>
            );
        }),
    ];

    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px', display: "flex" }}>
                    <img
                        src={hat}
                        alt="Logo"
                        style={{ width: '50px', height: '50px' }}
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}

                />
                {isLogin ? <UserDropdown /> : <Link to="/login" style={{ color: "white" }}>Đăng nhập</Link>}

            </Header>

            <Content style={{ padding: '0 48px', flex: '1', overflowY: 'auto' }}>
                <CarouselPage />
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {breadcrumbItems}
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 'calc(100vh - 200px)',
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {location.pathname === "/" ? <HomePage /> : <Outlet />}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Web công ty Gia Long ©{new Date().getFullYear()} Được code bởi Trường Long
            </Footer>
        </Layout>
    )
}

export default CustomerLayout