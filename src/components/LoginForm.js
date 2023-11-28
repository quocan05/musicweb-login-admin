import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/LoginForm.scss";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="name-header">Spoteefy</div>
      </div>
      <div className="body">
        <div className="header-form">
          <h1>Đăng nhập Spoteefy</h1>
        </div>
        <div className="form-wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <div className="signup-direct">
                Chưa tạo tài khoản?
                <Button variant="link">Đăng ký ngay!</Button>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Đăng nhập ngay
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
