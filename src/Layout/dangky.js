import React, { Component } from "react";

import { Layout, Breadcrumb, Button, Input, Card } from "antd";
import {
  Form,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete
} from "antd";

// import Phong from "./Layout_dk/dk_phong";
import { DatePicker, Radio } from "antd";
import { fetchDataPostData_ND, fetchDataPostData_P } from "../Api/api";
const { Content } = Layout;
const FormItem = Form.Item;
const { Meta } = Card;
const { MonthPicker, RangePicker } = DatePicker;

export class dangky extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit_nguoidung = e => {
    e.preventDefault();
    const { form } = this.props;

    const {
      tennd,
      MaND,
      SDT,
      CMND,
      quequan,
      gioitinh,
      ngaysinh,
      matkhau,
      songuoi,
      ngaydat,
      ngayhuy
    } = form.getFieldsValue([
      "tennd",
      "MaND",
      "SDT",
      "CMND",
      "quequan",
      "gioitinh",
      "ngaysinh",
      "songuoi",
      "matkhau",
      "ngaydat",
      "ngayhuy"
    ]);
    console.log(
      "tesst nguoidung----nhe ",
      tennd,
      MaND,
      SDT,
      CMND,
      quequan,
      gioitinh,
      ngaysinh,
      songuoi,
      matkhau,
      ngaydat,
      ngayhuy
    );

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      fetchDataPostData_ND(fieldsValue);
      const values = {
        ...fieldsValue,
        ngaysinh: fieldsValue["ngaysinh"].format("YYYY-MM-DD"),
        ngaydat: fieldsValue["ngaydat"].format("YYYY-MM-DD"),
        ngayhuy: fieldsValue["ngayhuy"].format("YYYY-MM-DD")
      };
      console.log("value: ", values);
      console.log("Received values of form: ", fieldsValue);
    });
  };

  handleSubmit_phong = e => {
    e.preventDefault();
    const { form } = this.props;

    const {
      maphong,
      tenphong,
      giaphong,
      loaiphong,
      trangthai
    } = form.getFieldsValue([
      "maphong",
      "tenphong",
      "giaphong",
      "loaiphong",
      "trangthai"
    ]);

    console.log(
      "tesst phong----nhe ",
      maphong,
      tenphong,
      giaphong,
      loaiphong,
      trangthai
    );

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        console.log("ERRORRRRRR::", err);
        return;
      }

      fetchDataPostData_P(fieldsValue);
      console.log("Received values of form: ", fieldsValue);
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

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    return (
      <Content>
        {/* <Nguoidung/> */}
        <div className="row dangky ">
          <div className="dangky1 ">
            <Card
              hoverable
              style={{ width: 230 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Nguyễn Thị A" description="Dĩ An" />
            </Card>
          </div>
          {/* <Nguoidung /> */}

          {/* <div className="row dangky">
       <div className=" dangky1">
       </div>
       <Phong/>
       </div> */}
        </div>
        <div className="row dangky ">
          <div className="dangky1 "></div>

          {/* <Phong /> */}
          {/* <div className="row dangky">
       <div className=" dangky1">
       </div>
       <Phong/>
       </div> */}
        </div>
      </Content>
    );
  }
}

export default Form.create()(dangky);
