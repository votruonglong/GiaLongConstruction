import React from 'react';
import { Dropdown, Space, Avatar, Tag, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './UserDropdown.css'; // Import file CSS

const UserDropdown = ({ handleLogin }) => {
    const items = [
        {
            key: '1',
            label: 'My Account',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
        },
        {
            label: (
                <Button onClick={() => console.log("log out...")} style={{ width: "100%" }}>
                    Logout
                </Button>
            ),
            key: "3",
            style: { textAlign: "center" },
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={["click"]}
        >
            <a onClick={(e) => e.preventDefault()} className="user-dropdown">
                <Space>
                    <Avatar size="large" src="https://i.pravatar.cc/300" />
                    <Tag color="blue">Hi Admin</Tag>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default UserDropdown;
