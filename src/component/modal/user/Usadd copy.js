import React, {useState} from "react";
import {Modal, Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {Input} from "antd";
import {Badge, Space, Switch} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";

const Usadd = () => {
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
                title="Sửa"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                Số Lỗi :
                <Input
                    value={modalname}
                    onChange={(e) => setModaname(e.target.value)}
                    placeholder="Vi phạm"
                    type={'number'}
                />
                <br/>
                Khóa Tài Khoản : <br/>
                <Space>
                    <Switch checked={show} onChange={() => setShow(!show)}/>
                    <Badge
                        className="site-badge-count-109"
                        count={show ? 'Đã Khóa TK' : ' Tk Không Bị Khóa'}
                        style={{backgroundColor: "red"}}
                    />
                </Space>
            </Modal>
        </>
    );
};

export default Usadd;
