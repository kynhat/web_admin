import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Menu, Dropdown, Button, Icon, message,Input } from "antd";

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const { Header } = Layout;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);
export class body extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <div className="row ">
          <div className="_heder1 ml-2">{/* thsdsad */}</div>
          <div className="_heder2 ml-5">{/* đasa */}</div>
          {/* <div className="_heder3">
            <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
              Đăng nhập
            </Dropdown.Button>
          </div> */}
          {/* <div className="input_seach">
            <Input placeholder="default size" />
          </div>
          <div >
          <Button className="search" shape="circle" icon="search" />
          </div> */}
        </div>
      </Header >
    );
  }
}

export default body;
