import React, { useState } from 'react';
import {
    Breadcrumb,
    Layout,
    Menu,
    theme,
    Dropdown,
    Space,
    Avatar,
    Button,
    Drawer,
} from 'antd';
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
import CarouselPage from '../components/carousel';

const { Header, Content, Footer } = Layout;

const CustomerLayout = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [visible, setVisible] = useState(false);

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

    const location = useLocation();

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
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={hat} alt="Logo" style={{ width: '50px', height: '50px' }} />
                    <div style={{ marginLeft: '10px', color: 'white' }}>Gia Long Construction</div>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                    responsive={false}
                />
                {isLogin ? (
                    <UserDropdown />
                ) : (
                    <Link to="/login" style={{ color: "white" }}>Đăng nhập</Link>
                )}
                <Button
                    type="primary"
                    onClick={() => setVisible(true)}
                    style={{ marginLeft: '16px', display: 'none' }} // Hide button for larger screens
                >
                    Menu
                </Button>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={true}
                    onClose={() => setVisible(false)}
                    visible={visible}
                >
                    <Menu
                        mode="inline"
                        items={items}
                        onClick={() => setVisible(false)} // Close drawer when menu item is clicked
                    />
                </Drawer>
            </Header>

            <Content style={{
                padding: '0 24px',
                flex: '1',
                overflowY: 'auto',
                overflowX: 'hidden',
                margin: '0 auto',
                width: '100%', // Set width to 100% to fill available space
                maxWidth: '1600px', //
            }}>
                {location.pathname === "/" ? <CarouselPage /> : null}

                <Breadcrumb style={{ margin: '16px 0' }}>
                    {breadcrumbItems}
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        width: '100%',
                    }}
                >
                    {location.pathname === "/" ? <HomePage /> : <Outlet />}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Web công ty Gia Long ©{new Date().getFullYear()} Được code bởi Trường Long
            </Footer>
        </Layout>
    );
};

export default CustomerLayout;
