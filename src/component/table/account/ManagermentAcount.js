import React, { useState, useEffect } from "react";
import {  Form, Table, Tag, Space, Modal, Button, Input, Row, Col } from "antd";
import NavMenus from "../../common/NavMenus";
import Footerr from "../../common/Footerr";
import Trangmodal from "../../modal/trang/Trangmodal";
import { Select } from "antd";
import { CreditCardTwoTone, FormOutlined, SearchOutlined } from "@ant-design/icons";
import { paginationResponsive } from "../../helpers/Funcion";
import { observer } from "mobx-react";
import { useStore } from "../../store/hook";
import StoreUserContext from "../../store/StoreUser";
import StoreUpdateUserContext from "../../store/StoreUpdateUser";

import { LOCAL_STORAGE } from "../../helpers/Contant";



const { Option } = Select;

const ManagermentAcount = observer(() => {
    const StoreUser = useStore(StoreUserContext)
    const StoreUpdateUser = useStore(StoreUpdateUserContext)
   
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(1000)
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataById,setDataById] = useState()
    const getListUser = async () => {
      let json = {
        token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
        id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
        role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
        page: page,
        pageSize: pageSize,
        keySearch: search
        
      }
    
      await StoreUser.action_user(json)
    }
    useEffect(()=>{
      getListUser()
  
    }, [search, isModalVisible])
    
    const {dataUser} = StoreUser
    const {listUser} = dataUser
   

    const updateUser = async () => {
        if(dataById){
        const {id} = dataById
        let json = {
          token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
          id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
          role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
          idUpdate: id,
          typeAccount: "fb_user",
          statusAccount: status
          
        }
        
       const result = await StoreUpdateUser.action_updateuser(json)
       if(result && result.code===200){
            setIsModalVisible(false);
       }
       
       
      }
    }
      
  

    const onSearch = (e) => {
        let value = e.target.value.trim()
        if(value){
            if(e.key==='Enter'){
                setSearch(value)
            }
            
        }
        else{
            setSearch('')
        }

    }
    
    const [form] = Form.useForm();
    useEffect(() => {  
        if(dataById){
            
            const { fristname, lastname, id, resgiser_time, status_acount} = dataById 
        
            form.setFieldsValue({
            
                fullName: (fristname ?? "") + (" " + lastname ?? ""),
                iD: id??"",
                resgiserTime: resgiser_time??"",
                statusAccount: status_acount??""
            })
        }
    }, [dataById])


  

  const showModal = (record) => {
      if(record){
        setDataById(record)
        setIsModalVisible(true);
      }
  
  };

 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const columns = [
        {
            title: "STT",
            dataIndex: "accountStt",
            render: (value, state, i) => i + 1
        },
        {
            title: "Id",
            dataIndex: "id",
            render: (value,state) => state.id
        },
        {
            title: "T??n ng?????i d??ng",
            dataIndex: "fullName",
            render: (value, state) => state.fristname + " " + state.lastname
        },
        {
            title: "Th???i gian ????ng k?? ",
            dataIndex: "resgiserTime",
            render: (value, state) => state.resgiser_time
        },
        {
            title: "Tr???ng Th??i",
            dataIndex: "accountConfirmed",
            render: (value, state) => {
                if(state.status_acount==="normal"){
                    return "B??nh th?????ng"
                }
                else if(state.status_acount==="disable"){
                    return "V?? hi???u h??a"
                }
                else if(state.status_acount==="unconfimred"){
                    return "Ch??a x??c th???c (Email, S??T)"
                }
                else if(state.status_acount==="checkpoint"){
                    return "Ph???i ki???m tra ng?????i d??ng ????ng nh???p"
                }
                return "???? x??c th???c"
            }
        },
        {
            title: "Ch???nh s???a",
            key: "action",
            width: 100,
            render: (text, record) => 

            <Button onClick={()=>showModal(record)}>
                <FormOutlined />
            </Button>
               
               
        },
        
    ];
   

    return (
        <>
            <NavMenus />
            <br />
            
            <h1 className="tailetable">

                <Row>
                    <Col xl={5}> Qu???n L?? ng?????i d??ng</Col>
                    <Col xl={4}>
                        <Input onKeyUp={onSearch} autoFocus prefix={<SearchOutlined />} placeholder="Nh???p t??? kh??a c???n t??m" />
                    </Col>
                </Row>
            </h1>
            <Row>
                <Col xl={24}>
                <Table columns={columns} dataSource={listUser} className="tabletop"/>
                </Col>
                <Col xl={24}>
           
                </Col>
            
            </Row>
            <br />
            <Modal title="Qu???n l?? ng?????i d??ng" visible={isModalVisible} onOk={updateUser} onCancel={handleCancel}>
            <Form form={form}>
                <Row justify='space-between' >
                    <Col xl={24}>
                    <label>Id</label>
                        <Form.Item name={"iD"}>
                            <Input disabled/>
                        </Form.Item>
                    
                    </Col>
                    <Col xl={24}>
                    <label>T??n ng?????i d??ng</label>
                        <Form.Item name={"fullName"}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
                    <Col xl={24}>
                    <label>Th???i gian ????ng k??</label>
                        <Form.Item name={"resgiserTime"}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>

                </Row>
                <label>Tr???ng th??i</label>
                <Form.Item name={"statusAccount"} >
                    <Select onChange={value=>{
                        setStatus(value)
                    }}>
                        <Option value={"normal"}>
                            normal
                        </Option>
                        <Option value={"disable"}>
                            disable
                        </Option>
                        <Option value={"unconfimred"}>
                            unconfimred
                        </Option>
                        <Option value={"checkpoint"}>
                            checkpoint
                        </Option>
                    </Select>

                </Form.Item>

            </Form>
            </Modal>
            <Footerr />
        </>
    );
});

export default ManagermentAcount;
