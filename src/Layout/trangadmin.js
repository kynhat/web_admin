import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Form } from "antd";
import _Sider from "./sider";
import _Header from "./header";
import Admin from "./admin";

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Content } = Layout;

export class body extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <_Sider />
        <Layout>
          <_Header />
          {/* khoan giua may xam */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Quản lý</Breadcrumb.Item>
              <Breadcrumb.Item>Trang phân quyền</Breadcrumb.Item>
            </Breadcrumb>
            <Admin />
          </Content>
 
        </Layout>
      </Layout>
    );
  }
}

export default Form.create()(body);
