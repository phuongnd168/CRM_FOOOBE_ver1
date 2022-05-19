import React, {useState} from "react";
import {Modal, Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {Input} from "antd";
import {Badge, Space, Switch} from "antd";
import {Avatar} from "antd";
import './userct.scss'
import {
    UserOutlined,
    ClockCircleFilled,
    UsergroupAddOutlined,
    WifiOutlined,
    BookOutlined,
    GroupOutlined,
    PushpinOutlined,
    CheckOutlined,

} from '@ant-design/icons';

const UserCt = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalname, setModaname] = useState();
    const [modalprice, setModanprice] = useState();
    const [show, setShow] = React.useState(true);

    const dispatch = useDispatch();

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        console.log("Clicked cancel button");
        setVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Chi tiết
            </Button>
            <Modal
                title="Thông tin người dùng"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="userct">
                    <Avatar size={84} icon={<UserOutlined/>}/>
                    <span className="spanmaginlef">Tên hiển thị :</span>
                    <h3 className="textvl"><ClockCircleFilled/> Tạo ngày 19/02/2021</h3>
                    <h3><UsergroupAddOutlined/> Có 120 người bạn</h3>
                    <h3><WifiOutlined/> Có 3 người theo giõi</h3>
                    <h3><BookOutlined/> Có 140 bài viết</h3>
                    <h3><GroupOutlined/> Đã tham gia 4 nhóm </h3>
                    <h3><PushpinOutlined/> Đang quản lý 1 nhóm </h3>
                    <h3><CheckOutlined/> Tài khoản còn hoạt động </h3>
                </div>
            </Modal>
        </>
    );
};

export default UserCt;
