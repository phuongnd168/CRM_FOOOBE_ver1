import React, {useState} from "react";
import {Modal, Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {Input} from "antd";
import {Badge, Space, Switch} from "antd";
import {
    UserOutlined,
    ClockCircleFilled,
    UsergroupAddOutlined,
    WifiOutlined,
    BookOutlined,
    GroupOutlined,
    PushpinOutlined,
    CheckOutlined,
} from "@ant-design/icons";

const Trangmodal = () => {
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
        //   dispatch(PostData({ name: modalname, price: modalprice }));
        //   setModaname('');
        //   setModanprice('');
        setVisible(false);
    };

    const handleCancel = () => {
        console.log("Clicked cancel button");
        setVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Hành Động
            </Button>
            <Modal
                title="Quản lý trang"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <h3>
                    {" "}
                    <ClockCircleFilled/> Tạo ngày 19/02/2021 Bởi Tran_Manh
                </h3>
                <h3>
                    {" "}
                    <UserOutlined/> Có 3 quản trị viên
                </h3>
                <h3>
                    {" "}
                    <BookOutlined/> Có 140 bài viết
                </h3>
                Số Vi Phạm :
                <Input
                    value={modalname}
                    onChange={(e) => setModaname(e.target.value)}
                    placeholder="Vi phạm"
                    type={"number"}
                />
                <br/>
                Khóa Trang : <br/>
                <Space>
                    <Switch checked={show} onChange={() => setShow(!show)}/>
                    <Badge
                        className="site-badge-count-109"
                        count={show ? "Đã Khóa Trang" : " Trang Không Bị Khóa"}
                        style={{backgroundColor: "red"}}
                    />
                </Space>
            </Modal>
        </>
    );
};

export default Trangmodal;
