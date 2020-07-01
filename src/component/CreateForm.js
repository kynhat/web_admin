import React, { Component } from "react";

import {
  Input, Modal, Form,
  Row, Col, DatePicker, Radio
} from "antd";

import {fetchUpdate_ND,fetchDataPostData_ND} from "../Api/api";

// import DK_Phong from "./dk_phong";
import moment from "moment";
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(

  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

    }
    // handleUpdate= e => {
    //   e.preventDefault();
    //   const { form } = this.props;
    //   console.log("tessssssssssss1211212121", form);
    //   alert("trdssss")
    //   const {
    //     tennd,
    //     MaND,
    //     SDT,
    //     gioitinh,
    //     Songuoi,
    //     ngaydat,
    //     ngayhuy
    //   } = form.getFieldsValue([
    //     "tennd",
    //     "MaND",
    //     "SDT",
    //     "gioitinh",
    //     "Songuoi",
    //     "ngaydat",
    //     "ngayhuy"
    //   ]);
    //   // console.log(
    //   //   "tesst nguoidung----nhe ",
    //   //   tennd,
    //   //   MaND,
    //   //   SDT,
    //   //   gioitinh,
    //   //   songuoi,
    //   //   ngaydat,
    //   //   ngayhuy
    //   // );
    //   this.props.form.validateFields((err, fieldsValue) => {
    //     if (err) {
    //       return;
    //     }
    
    //     fetchUpdate_ND(fieldsValue);
    //     const values = {
    //       ...fieldsValue,
    
    //       ngaydat: moment(fieldsValue.ngaydat).format("YYYY-MM-DD"),
    //       ngayhuy: moment(fieldsValue["ngayhuy"]).format("YYYY-MM-DD")
    //     };
    //     console.log("value: ", values);
    //     console.log("Received values of form: ", fieldsValue);
    //   });
    // };

    handleCancel = () => {
      // this.setState({ visible: false });
      alert("FASDFDSSDFS")
    
    };

    handleCreate = e => {
      e.preventDefault();
     
      const { form } = this.props;
      console.log("tessssssssssss1211212121", form);
    
      const {
        tennd,
        MaND,
        SDT,
        gioitinh,
        Songuoi,
        ngaydat,
        ngayhuy
      } = form.getFieldsValue([
        "tennd",
        "MaND",
        "SDT",
        "gioitinh",
        "Songuoi",
        "ngaydat",
        "ngayhuy"
      ]);
      // console.log(
      //   "tesst nguoidung----nhe ",
      //   tennd,
      //   MaND,
      //   SDT,
      //   gioitinh,
      //   songuoi,
      //   ngaydat,
      //   ngayhuy
      // );
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
       
        fetchDataPostData_ND(fieldsValue);
        const values = {
          ...fieldsValue,

          ngaydat: moment(fieldsValue.ngaydat).format("YYYY-MM-DD"),
          ngayhuy: moment(fieldsValue["ngayhuy"]).format("YYYY-MM-DD")
        };
        console.log("value: ", values);
        console.log("Received values of form: ", fieldsValue);
      });
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;

      const { getFieldDecorator } = this.props.form;
      let ngaydat = moment();
      // const disabled  ? true : false;
      const formItemLayout = {
        labelCol: {
          xs: { span: 50 },
          sm: { span: 50 },
         
        },
        wrapperCol: {
          xs: { span: 50 },
          sm: { span: 50 },
     
        },
      
      };

      const config = {
        rules: [
          { type: "object", required: true, message: "Please select time!" }
        ]
      };
      return (
        <Modal
          visible={visible}
          title="Thêm thông tin người dùng"
          onCancel={onCancel}
          onOk={onCreate}
          
        >
          <div className="row" >
            <div className=" backgroup"></div>
            {/* dk_nguoidung */}
            <div className="  border" style={{ background: "#f2f4f8", minHeight: 100 }}>
              <Form {...formItemLayout} style={{width:500}} onSubmit={this.handleSubmit_nguoidung}>
                <Row gutter={10}>
                  <Col sm={12} xs={24} guitter={10}>
                    <Form.Item label="Tên ND">
                      {getFieldDecorator("tennd", {
                        rules: [
                          {
                            required: true,
                            message: "nhập tên người dùng"
                          }
                        ]
                      })(<Input />)}
                    </Form.Item>
                  </Col>
                  <Col sm={12} xs={24} >
                    <Form.Item label="Mã ND">
                      {getFieldDecorator("MaND", {
                        rules: [
                          {
                            // required: false,
                            required:true,
                            message: "nhập mã người dùng"
                          }
                        ]
                        //disabled="false"
                      })(<Input  />)}
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={10}>
                  <Col sm={12} xs={24}>
                    <Form.Item label="Số điện thoại">
                      {getFieldDecorator("SDT", {
                        rules: [
                          {
                            required: true,
                            message: "nhập số điện thoại"
                          }
                        ]
                      })(<Input />)}
                    </Form.Item>
                  </Col>

                  <Col sm={12} xs={24}>
                    <Form.Item label="Số Người">
                      {getFieldDecorator("Songuoi", {
                        rules: [
                          {
                            required: true,
                            message: "nhập số điện thoại"
                          }
                        ]
                      })(<Input />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col sm={12} xs={24}>
                    <Form.Item label="Ngày đặt">
                      {getFieldDecorator("ngaydat", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng chọn ngày dặt"
                          }
                        ],
                        initialValue: ngaydat
                      })(<DatePicker format="DD/MM/YYYY" />)}
                    </Form.Item>
                  </Col>

                  <Col sm={12} xs={24}>
                    <Form.Item label="Ngày hủy">
                      {getFieldDecorator("ngayhuy", config)(<DatePicker />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col sm={1} xs={24}>
                    <Form.Item label="Giới tính">
                      {getFieldDecorator("gioitinh")(
                        <Radio.Group>
                          <Radio value="nam">Nam</Radio>
                          <Radio value="nữ">Nữ</Radio>
                        </Radio.Group>
                      )}
                    </Form.Item>
                  </Col>


                </Row>
                {/* <Row gutter={10}>
                  <Col sm={12} xs={24}>
                    <Form.Item label="Ngày sinh">
                      {getFieldDecorator("ngaysinh", config)(<DatePicker />)}
                    </Form.Item>
                  </Col>
                </Row> */}
                {/* <Row type="flex" justify="center">
                  <Col sm={3} xs={24}>
                    <Row type="flex" justify="space-between">
                      <Button type="primary" htmlType="submit1">
                        Thêm
                </Button>

                    </Row>
                  </Col>
                </Row> */}
              </Form>
            </div>
          </div>

          {/* <div className="backgroup  ">
            <div className=" "></div>
            <DK_Phong />
          </div> */}
        </Modal>
      );
    }
  }
);
export default CollectionCreateForm
