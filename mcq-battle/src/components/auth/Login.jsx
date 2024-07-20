import { useNavigate } from "react-router-dom";
import React, {useContext} from "react";
import { LockOutlined, MailOutlined} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";
import {Urls} from "../../constant/Urls.jsx";
import AuthContext from "../../contexts/auth.context.jsx";
import { login } from "../../services/api/auth/auth.services";
import AuthCookies from "../../services/cookie/authToken.cookie.jsx";

const LoginComponent = () => {
  const { setIsLoggedInUser}= useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await login(values);
      AuthCookies.SetAccessToken(response.data.access);
      AuthCookies.SetRefreshToken(response.data.refresh);
      setIsLoggedInUser(true);
      toast.success("Login successful!");
      navigate(Urls.Home());
    } catch (err) {
        console.log(err);
      toast.error("Incorrect username or password!");
    }
  };


return (
  <div className="flex items-center justify-center flex-grow px-8 py-24 bg-gray-100">
    <Form
      name="login"
      className="w-full max-w-md p-8 bg-white shadow-md rounded-xl"
      initialVaues={{ remember: true }}
      onFinish={onFinish}
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Log In</h2>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
      <Form.Item className="mt-8">
          <Button type="primary" htmlType="submit" className="w-full">
            Log In
          </Button>
        </Form.Item>
        <div className="text-center">
          Or <a href={Urls.Login()}>register now!</a>
        </div>
    </Form>
  </div>
);
};

export default LoginComponent;