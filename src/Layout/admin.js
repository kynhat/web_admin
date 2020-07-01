import React, { Component } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Layout,
  Card,
  Row,
  Col,
  Select
} from "antd";

const { Content } = Layout;
const FormItem = Form.Item;
const { Meta } = Card;
const { Option } = Select;

export class admin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <Content>
        <div className="row ">
          <div
            className="admin1 col-5 border"
            style={{ padding: 25, background: "#fff", minHeight: 100 }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Row gutter={30}>
                <Col sm={15} xs={24}>
                  <Form.Item label="Tên đăng nhập">
                    {getFieldDecorator("username", {
                      rules: [
                        { required: true, message: "Please input your note!" }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={30}>
                <Col sm={15} xs={24}>
                  <Form.Item label="Mật khẩu">
                    {getFieldDecorator("password", {
                      rules: [
                        { required: true, message: "Please input your note!" }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={30}>
                <Col sm={15} xs={24}>
                  <Form.Item label="Quyền">
                    {getFieldDecorator("gender", {
                      rules: [
                        {
                          required: true,
                          message: "Please select your gender!"
                        }
                      ]
                    })(
                      <Select
                        placeholder="Cấp quyền truy cập"
                        onChange={this.handleSelectChange}
                      >
                        <Option value="male">người dùng</Option>
                        <Option value="female">quản lý</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className=" mt-3">
                <Col sm={3} xs={12}>
                  <Row type="flex" justify="space-between">
                    <Button type="primary" htmlType="submit">
                      Thêm
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>

          <div
            className=" col border"
            style={{ padding: 24, background: "#fff", minHeight: 800 }}
          >
            Hóa Đơn
          </div>
        </div>
      </Content>
    );
  }
}

export default Form.create()(admin);
