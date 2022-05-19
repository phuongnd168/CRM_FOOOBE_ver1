import React, { useState, useEffect } from "react";
import { observer } from "mobx-react"
import "./logintow.scss";
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useStore } from "../store/hook";
import StoreLoginContext from "../store/StoreLogin";

import { openNotification } from "../helpers/Funcion";
import { useHistory } from "react-router-dom";
const Logintow = observer(() => {
  const StoreLogin = useStore(StoreLoginContext)
  const history = useHistory();
  const onFinish = async (value) => {
    if (value) {
      const result = await StoreLogin.action_login(value)
      const { code, message, data } = result;
      if (code === 200) {
        history.push("/")
        openNotification("Đăng nhập thành công !")
      } else {
        openNotification(message)
      }

    }
    console.log(value)
  }
  const onFinishFailed = (error) => {
    console.log(error)
  }

    
  return (
    <div className="logintowz">
      <label className="label-login">Đăng nhập</label>


      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="form-login">
          <label>Tài khoản</label>
          <Form.Item
            name="account"
            rules={[{ required: true, message: 'Vui lòng nhập email đúng định dạng',type:'email' }]}
          >
            <Input  />
          </Form.Item>
        </div>
        <div className="form-login">
          <label>Mật khẩu</label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu ' }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Logintow;
