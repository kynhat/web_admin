import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Dropdown,
  Button,
  Popconfirm,
  Input
} from "antd";
import _Sider from "./sider";
import _Header from "./header";

import { fetchDataPostData_ND, fetchDelete_ND } from "../Api/api";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData_ND } from "../actions";
// import Xoa from "../component/xoanguoidung";
import Xoa from "../component/Delete";
import Sua from "../component/Edit_ND";
const INPUT_TYPE = {
  TEXT_ID: 'TEXT_ID',
  TEXT_TND: 'TEXT_TND',
  TEXT_MND: 'TEXT_MND',
  TEXT_SDT: 'TEXT_SDT',
  TEXT_SN: 'TEXT_SN',
  TEXT_GT: 'TEXT_GT',
  TEXT_ND: 'TEXT_ND',
  TEXT_NH: 'TEXT_NH',
};

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class trangnguoidung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      tennd: '',
      mand: '',
      sdt: '',
      songuoi: '',
      gioitinh: '',
      ngaydat: '',
      ngayhuy: ''

    };
    this._onDeleteItem = this._onDeleteItem.bind(this);
    this._onUpdateItem = this._onUpdateItem.bind(this);
    this.createItem = this.createItem.bind(this);
  }




  _onUpdateItem(changeObject, type) {
    console.log("event", { changeObject: changeObject, type: type })
    if (type == INPUT_TYPE.TEXT_ID) {
      this.setState({
        id: changeObject.target.value,
      });
    }
    if (type == INPUT_TYPE.TEXT_TND) {
      this.setState({
        tennd: changeObject.target.value,
      });
    }
    // lastname: event.target.value,

    if (type == INPUT_TYPE.TEXT_MND) {
      this.setState({
        mand: changeObject.target.value
      });
    }
    if (type == INPUT_TYPE.TEXT_SDT) {
      this.setState({
        sdt: changeObject.target.value
      });
    }
    if (type == INPUT_TYPE.TEXT_SN) {
      this.setState({
        songuoi: changeObject.target.value
      });
    }
    if (type == INPUT_TYPE.TEXT_GT) {
      this.setState({
        gioitinh: changeObject.target.value
      });
    }
    if (type == INPUT_TYPE.TEXT_ND) {
      this.setState({
        ngaydat: changeObject.target.value
      });
    }
    if (type == INPUT_TYPE.TEXT_NH) {
      this.setState({
        ngayhuy: changeObject.target.value
      });
    }
  }
  _onDeleteItem(item) {
    fetchDelete_ND(item);
    // window.location.reload();
    const { data } = this.props;
    const itemIndex = data.data.item.indexOf(item);
    const dtdelete = data.data.item.splice(itemIndex, 1);
    this.setState({
      data: [...dtdelete]
    });
  }

  createItem(e) {
    e.preventDefault();
    window.location.reload();
    fetchDataPostData_ND(
      {
        tennd: this.state.tennd,
        MaND: this.state.mand,
        SDT: this.state.sdt,
        gioitinh:this.state.gioitinh,
        Songuoi: this.state.songuoi,
        ngaydat: this.state.ngaydat,
        ngayhuy: this.state.ngayhuy,
      }

    );
  }
  componentDidMount() {

    this.props.requestApiData_ND();

  }
  render() {
    const { data } = this.props;

    return (

      <Layout style={{ minHeight: "100vh" }}>
        <_Sider />
        <Layout>
          <_Header />
          <div className="layout_ND" style={{ marginTop: 50, backgroundColor: "white", margin: 20 }}>
            <div className="banglon row">
              <table className="bang_ttdn">
                <tr>
                  <th style={{ textAlign: "center" }}>Id</th>
                  <th style={{ textAlign: "center" }}>Tên người dùng</th>
                  <th style={{ textAlign: "center" }}>Mã người dùng</th>
                  <th style={{ textAlign: "center" }}>Số người</th>
                  <th style={{ textAlign: "center" }}>Số điện thoại</th>
                  <th style={{ textAlign: "center" }}>Giới tính</th>
                  <th style={{ textAlign: "center" }}>Ngày đặt</th>
                  <th style={{ textAlign: "center" }}>Ngày hủy</th>
                  <th style={{ textAlign: "center" }}></th>
                </tr>
                <tr>
                  <td>M1</td>
                  <td style={{ textAlign: "center" }}>
                    <Input
                      type="text"
                      value={this.state.tennd || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_TND)}
                    />
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <Input
                      type="text"
                      value={this.state.mand || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_MND)}
                    /></td>

                  <td style={{ textAlign: "center" }}>
                    <Input
                      value={this.state.songuoi || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_SN)}
                    /></td>

                  <td style={{ textAlign: "center" }}>
                    <Input
                      type="text"
                      value={this.state.sdt || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_SDT)}
                    /></td>
                  <td style={{ textAlign: "center" }}>
                    <Input
                      type="text"
                      value={this.state.gioitinh || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_GT)}
                    /></td>

                  <td style={{ textAlign: "center" }}>
                    <Input
                      type="text"
                      value={this.state.ngaydat || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_ND)}
                    /></td>

                  <td style={{ textAlign: "center" }}>
                    <Input
                      value={this.state.ngayhuy || ''}
                      onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_NH)}
                    /></td>

                  <td style={{ textAlign: "right", paddingRight: 10 }}>
                    <Button type="primary" onClick={this.createItem}>
                      thêm
                          </Button></td>
                </tr>
              </table>

              {/* table danh sach phong */}
              <table className="danhsachcacbang ">

                <tr >
                  <th style={{ textAlign: "center" }}>Id</th>
                  <th style={{ textAlign: "center" }}>Tên người dùng</th>
                  <th style={{ textAlign: "center" }}>Mã người dùng</th>
                  <th style={{ textAlign: "center" }}>Số người</th>
                  <th style={{ textAlign: "center" }}>Số điện thoại</th>
                  <th style={{ textAlign: "center" }}>Giới tính</th>
                  <th style={{ textAlign: "center" }}>Ngày đặt</th>
                  <th style={{ textAlign: "center" }}>Ngày hủy</th>
                  <th style={{ textAlign: "center" }}></th>
                </tr>
                {
                  data.data && data.data.item.map((p, key, index) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={p.id}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_ID)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.tennd || p.tennd}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_TND)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.mand || p.MaND}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_MND)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.songuoi || p.Songuoi}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_SN)}
                          /></td>
                           <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.sdt || p.SDT}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_SDT)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.gioitinh || p.gioitinh}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_GT)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.ngaydat || p.ngaydat}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.ND)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <input
                            value={this.state.ngayhuy || p.ngayhuy}
                            onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.TEXT_NH)}
                          /></td>
                        <td style={{ textAlign: "center" }}>
                          <Xoa key={key}
                            post={p.id}
                            onDelete={this._onDeleteItem} />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Sua key={key}
                            post={this.state}
                            id={p.id}
                            onEdit={this._onUpdateItem} />
                        </td>
                      </tr>
                    )
                  })
                }

              </table>

            </div>
          </div>
        </Layout>
      </Layout>


    );
  }
}

// export default Form.create()(body);
const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData_ND }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(trangnguoidung);
