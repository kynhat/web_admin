import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Footer } = Layout;
export class body extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    );
  }
}

export default body;
