import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import Dangky from "./dangky";
import Admin from "./admin";
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class body extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {/* <span className="hinhvuong">
            <h5>Electricity & Water</h5>
          </span> */}
          {/* Quản lý */}
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span><Link to={"/dangky"}>Đăng ký</Link></span>
          </Menu.Item>
          
          <SubMenu
            key="sub_1"
            title={
              <span>
                <Icon type="user" />
                <span>Quản lý</span>
              </span>
            }
          >
            <Menu.Item key="3"><Link to={"/nguoidung"}>Người dùng</Link></Menu.Item>
            <Menu.Item key="4"><Link to={"/phong"}>Phòng</Link></Menu.Item>
            <Menu.Item key="6"><Link to={"/admin"}>Phân quyền</Link></Menu.Item>
           
          </SubMenu>
          {/* điện-nước */}
          <SubMenu
            key="sub_2"
            title={
              <span>
                <Icon type="user" />
                <span>Chỉ số</span>
              </span>
            }
          >
            <Menu.Item key="9"> Điện</Menu.Item>
            <Menu.Item key="10"> Nước</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default body;
