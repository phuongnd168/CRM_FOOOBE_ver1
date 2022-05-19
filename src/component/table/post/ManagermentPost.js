import React, { useState, useEffect } from "react";
import {  Form, Table, Tabs, Space, Modal, Button, Input, Row, Col } from "antd";
import NavMenus from '../../common/NavMenus';
import Footerr from '../../common/Footerr';
import {Select} from "antd";

import { observer } from "mobx-react";
import { useStore } from "../../store/hook";
import StorePostContext from "../../store/StorePost";
import StoreIconsContext from "../../store/StoreIcons";
import StoreStickerContext from "../../store/StoreSticker";
import StoreTypeIconContext from "../../store/StoreTypeIcon";
import { LOCAL_STORAGE } from "../../helpers/Contant";
import StoreUpdateStoryContext from "../../store/StoreUpdateStory";
import { CreditCardTwoTone, FormOutlined, SearchOutlined } from "@ant-design/icons";

const {Option} = Select;

const ManagermentPost = observer(() => {
    const StoreUpdateStory = useStore(StoreUpdateStoryContext)
    const StorePost = useStore(StorePostContext)
    const StoreIcons = useStore(StoreIconsContext)
    const StoreSticker = useStore(StoreStickerContext)
    const StoreTypeIcon = useStore(StoreTypeIconContext)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataById,setDataById] = useState()
    const [postMode,setPostMode] = useState()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(1000)
    const [search, setSearch] = useState("")
    const [CommentMode, setCommentMode] = useState("on")


    const getListStory = async () => {
      let json = {
        token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
        id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
        role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
        page: page,
        pageSize: pageSize,
        keySearch: search,
        rangeTime: null,
        status: null,
        
      }
    
      await StorePost.action_post(json)
    }
    useEffect(()=>{
      getListStory()
  
    }, [search, isModalVisible])
    const {dataPost} = StorePost
    const {listStory} = dataPost
   console.log(listStory)

    const getListIcons = async () => {
        let json = {
          token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
          id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
          role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
          page: 1,
          pageSize: 100,
          keySearch: "",
          sttRange: "asc",
          updateRange: ""
          
        }
      
        await StoreIcons.action_icons(json)
      }
      useEffect(()=>{
        getListIcons()
    
      }, [])
      const {dataIcons} = StoreIcons
      const {listIcon} = dataIcons
      


      const getListSticker = async () => {
        let json = {
          token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
          id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
          role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
          page: 1,
          pageSize: 100,
          keySearch: "",
          nameRange: "asc",
          timeRange: ""
          
        }
      
        await StoreSticker.action_sticker(json)
      }
      useEffect(()=>{
        getListSticker()
    
      }, [])
      const {dataSticker} = StoreSticker
      const {listSticker} = dataSticker
      


      const getListTypeIcon = async () => {
        let json = {
          token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
          id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
          role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
          page: 1,
          pageSize: 100,
          keySearch: "",
          nameRange: "asc",
          timeRange: ""
          
        }
      
        await StoreTypeIcon.action_typeicon(json)
      }
      useEffect(()=>{
        getListTypeIcon()
    
      }, [])
      const {dataTypeIcon} = StoreTypeIcon
      const {listTypeIcon} = dataTypeIcon
     

      
     
    

    const updateStory = async () => {
      if(dataById){
      const {stt} = dataById
      let json = {
        token: sessionStorage.getItem(LOCAL_STORAGE.TOKEN)?sessionStorage.getItem(LOCAL_STORAGE.TOKEN):"",
        id: sessionStorage.getItem(LOCAL_STORAGE.ID)?sessionStorage.getItem(LOCAL_STORAGE.ID):"",
        role: sessionStorage.getItem(LOCAL_STORAGE.ROLE)?sessionStorage.getItem(LOCAL_STORAGE.ROLE):"",
        storyStt: stt,
        postMode: postMode,
        commentMode: CommentMode
        
      }
      
     const result = await StoreUpdateStory.action_updatestory(json)
     if(result && result.code===200){
          setIsModalVisible(false);
     }
     
     
    }
  }

      const showModal = (record) => {
        if(record){
          setDataById(record)
          setIsModalVisible(true);
        }
    
    };
  
   
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
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const [form] = Form.useForm();
    useEffect(() => {  
        if(dataById){
            
            const { id, stt, timePost, display, status } = dataById 
        
            form.setFieldsValue({
            
                id: id ?? "",
                stt: stt??"",
                timePost: timePost??"",
                display: display??"",
                status: status??""
            })
        }
    }, [dataById])


    const tableStory = [
        {
            title: "STT",
            dataIndex: "postStt",
            render: (value, state, i) => i + 1
        },
        {
            title: "Id",
            dataIndex: "id",
            render: (value, state) => state.id 
        },
        {
            title: 'Thời gian đăng bài',
            dataIndex: 'timePost',
            render: (value, state) => state.timePost
            
        },
        {
            title: 'Dạng bài viết ',
            dataIndex: 'type',
            render: (value, state) => state.type
              

           

            
          
          
        },
       
        {
          title: 'Chế độ hiển thị',
          dataIndex: 'Display',
          render: (value, state) => state.display
          
        },
        
        {
            title: 'Chỉnh sửa',
            key: 'action',
            render: (text, record) => (
              <Button onClick={()=>showModal(record)}>
                <FormOutlined />
              </Button>
            ),
        },
    ];

    const tableIcon = [
        {
            title: "STT",
            dataIndex: "iconStt",
            render: (value, state, i) => i + 1
        },
        {
            title: "Icon",
            dataIndex: "icon",
            render: (value, state) => state.content
        },
        {
            title: 'Mô tả',
            dataIndex: 'note',
            render: (value, state) => state.note
            
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (value, state) => state.status
            
          
        },
        {
            title: 'Thời gian tạo',
            dataIndex: 'timeCreate',
            render: (value, state) => state.time
        },
      
    ];


    const tableSticker = [
        {
            title: "STT",
            dataIndex: "stickerStt",
            render: (value, state, i) => i + 1
        },
        {
            title: "Name Sticker",
            dataIndex: "nameSticker",
            render: (value, state) => state.name
        },
        {
            title: 'Album',
            dataIndex: 'album',
            render: (value, state) => state.album
            
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (value, state) => state.status
            
          
        },
        {
            title: 'Thời gian tạo',
            dataIndex: 'timeCreate',
            render: (value, state) => state.time
        },
     
    ];

    
    const tableTypeIcon = [
        {
            title: "STT",
            dataIndex: "typeIconStt",
            render: (value, state, i) => i + 1
        },
        {
            title: "Content",
            dataIndex: "contentSticker",
            render: (value, state) => state.content
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (value, state) => state.status
            
          
        },
        {
            title: 'Thời gian tạo',
            dataIndex: 'timeCreate',
            render: (value, state) => state.time
        },
       
    ];
    const { TabPane } = Tabs;

    return (
        <>
            <NavMenus/><br/>
            <h1 className='tailetable'>Quản Lý Bài Viết
                    <Col xl={4}>
                        <Input onKeyUp={onSearch} autoFocus prefix={<SearchOutlined />} placeholder="Nhập từ khóa cần tìm" />
                    </Col>
            </h1>
            
            <Tabs style={{}} defaultActiveKey="1">

              <TabPane tab="Quản lý bài viết" key="1">
                <Table columns={tableStory} dataSource={listStory} className='tabletop'/>
              </TabPane>

              <TabPane tab="Danh sách icon" key="2">
                <Table columns={tableIcon} dataSource={listIcon} className='tabletop'/>
              </TabPane>

              <TabPane tab="Danh sách sticker" key="3">
                <Table columns={tableSticker} dataSource={listSticker} className='tabletop'/>
              </TabPane>

              <TabPane tab="Danh sách loại sticker" key="4">
                <Table columns={tableTypeIcon} dataSource={listTypeIcon} className='tabletop'/>
              </TabPane>
            </Tabs>

          
            
    <Modal title="Quản lý bài viết" visible={isModalVisible} onOk={updateStory} onCancel={handleCancel}>
            <Form form={form}>
                <Row justify='space-between' >
                    
                    <Col xl={24}>
                    <label>ID</label>
                        <Form.Item name={"id"}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
                    <Col xl={24}>
                    <label>Stt</label>
                        <Form.Item name={"stt"}>
                            <Input disabled/>
                        </Form.Item>
                    
                    </Col>
                    <Col xl={24}>
                    <label>Thời gian đăng bài</label>
                        <Form.Item name={"timePost"}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
                
                   
                    <Col xl={24}>
                    <label>Chế độ hiển thị</label>
                        <Form.Item name={"display"}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>

                </Row>
                <label>Trạng thái</label>
                <Form.Item name={"status"} >
                    <Select onChange={value=>{
                        setPostMode(value)
                    }}>
                        <Option value={"normal"}>
                            normal
                        </Option>
                        <Option value={"delete"}>
                            delete
                        </Option>
                        <Option value={"remove"}>
                            remove
                        </Option>
                       
                    </Select>

                </Form.Item>

            </Form>
            </Modal>
            
            <Footerr/>
        </>
    )
})

export default ManagermentPost