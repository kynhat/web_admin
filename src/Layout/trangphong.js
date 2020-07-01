
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
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData_P } from "../actions/phong";
import Xoa from "../component/Delete";
import Sua from "../component/EditP";
import { fetchDataPostData_P, fetchDelete_P, fetchUpdate_P } from "../Api/api";
const INPUT_TYPE = {
    TEXT_ID: 'TEXT_ID',
    TEXT_TP: 'TEXT_TP',
    TEXT_GP: 'TEXT_GP',
    TEXT_GD: 'TEXT_GD',
    TEXT_GN: 'TEXT_GN',
    TEXT_TRANGTHAI: 'TEXT_TRANGTHAI',
    TEXT_TONGTIEN: 'TEXT_TONGTIEN'
};

class trangphong extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            tenphong: '',
            giaphong: '',
            giadien: '',
            gianuoc: '',
            trangthai: '',
            tongtien: '',
            id: ''
        };
        this._onDeleteItem = this._onDeleteItem.bind(this);
        this.them = this.them.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changeObject, type) {
        console.log("event", { changeObject: changeObject, type: type })
        if (type == INPUT_TYPE.TEXT_ID) {
            this.setState({
                id: changeObject.target.value,
            });
        }
        if (type == INPUT_TYPE.TEXT_TP) {
            this.setState({
                tenphong: changeObject.target.value,
            });
        }
        // lastname: event.target.value,

        if (type == INPUT_TYPE.TEXT_GP) {
            this.setState({
                giaphong: changeObject.target.value
            });
        }
        if (type == INPUT_TYPE.TEXT_GD) {
            this.setState({
                giadien: changeObject.target.value
            });
        }
        if (type == INPUT_TYPE.TEXT_GN) {
            this.setState({
                gianuoc: changeObject.target.value
            });
        }
        if (type == INPUT_TYPE.TEXT_TRANGTHAI) {
            this.setState({
                trangthai: changeObject.target.value
            });
        }
        if (type == INPUT_TYPE.TEXT_TONGTIEN) {
            this.setState({
                tongtien: changeObject.target.value
            });
        }
    }

    them(e) {
        e.preventDefault();
        window.location.reload();
        fetchDataPostData_P(
            {
                tenphong: this.state.tenphong,
                giaphong: this.state.giaphong,
                giadien: this.state.giadien,
                gianuoc: this.state.gianuoc,
                trangthai: this.state.trangthai,
                tongtien: this.state.tongtien,
            }

        );

    }

    _onDeleteItem(item) {
        fetchDelete_P(item);
        window.location.reload();
        const { data } = this.props;
        const itemIndex = data.data.items.indexOf(item);
        const dtdelete = data.data.items.splice(itemIndex, 1);
        this.setState({
            data: [...dtdelete]
        });
    }

    componentDidMount() {
        this.props.requestApiData_P();

    }

    render() {
        const { data } = this.props;

        console.log("tesss-------data con lai  phong", data.data && data.data.items);
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <_Sider />
                <Layout>
                    <_Header />
                    <div className="layout_ND" style={{ marginTop: 50, backgroundColor: "white", margin: 20 }}>
                        {/* code phan chinh  */}
                        {/* <Dropdown overlay={menu} >
                            <Button>
                                Button 
                            </Button>
                        </Dropdown> */}
                        <div className="banglon row">
                            {/* <table className="bang_dhd">
                                <tbody>
                                    <tr>
                                        <th>Số điện</th>
                                        <th style={{ textAlign: "center" }}>ngày/tháng/năm</th>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td style={{ textAlign: "center" }}>12/12/2012</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td style={{ textAlign: "center" }}>12/12/2012</td>
                                    </tr>
                                </tbody>

                            </table> */}
                            {/* bảng tính tiền điện nước */}
                            <table className="bang_ttdn">
                                <tr>
                                    <th>Số thứ tự</th>
                                    <th style={{ textAlign: "center" }}>Tên phòng</th>
                                    <th style={{ textAlign: "center" }}>Giá phòng</th>
                                    <th style={{ textAlign: "center" }}>Giá nước</th>
                                    <th style={{ textAlign: "center" }}>Giá điện</th>
                                    <th style={{ textAlign: "center" }}>Tổng tiền</th>
                                    <th style={{ textAlign: "center" }}>Trạng thái</th>
                                    <th style={{ textAlign: "center" }}></th>
                                </tr>
                                <tr>
                                    <td>M1</td>
                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            type="text"
                                            value={this.state.tenphong || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TP)}
                                        />
                                    </td>

                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            type="text"
                                            value={this.state.giaphong || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GP)}
                                        /></td>

                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            value={this.state.gianuoc || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GN)}
                                        /></td>

                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            type="text"
                                            value={this.state.giadien || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GD)}
                                        /></td>

                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            type="text"
                                            value={this.state.tongtien || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TONGTIEN)}
                                        /></td>

                                    <td style={{ textAlign: "center" }}>
                                        <Input
                                            value={this.state.trangthai || ''}
                                            onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TRANGTHAI)}
                                        /></td>

                                    <td style={{ textAlign: "right", paddingRight: 10 }}>
                                        <Button type="primary" onClick={this.them}>
                                            thêm
                                    </Button></td>
                                </tr>
                            </table>
                            {/* table danh sach phong */}
                            <table className="danhsachcacbang ">
                                <tr >
                                    <th style={{ textAlign: "center" }}>Số thứ tự</th>
                                    <th style={{ textAlign: "center" }}>Tên phòng</th>
                                    <th style={{ textAlign: "center" }}>Giá phòng</th>
                                    <th style={{ textAlign: "center" }}>Giá nước</th>
                                    <th style={{ textAlign: "center" }}>Giá điện</th>
                                    <th style={{ textAlign: "center" }}>Tổng tiền</th>
                                    <th style={{ textAlign: "center" }}>Trạng thái</th>
                                    {/* <th style={{ textAlign: "center" }}>Chức năng</th> */}
                                </tr>
                                <div>
                                {
                                    data.data && data.data.items.map((p, key, index) => {
                                        return (
                                            <tr>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={p.id}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_ID)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.tenphong || p.tenphong}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TP)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.giaphong || p.giaphong}
                                                        // defaultValue={p.giaphong}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GP)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.gianuoc || p.gianuoc}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GN)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.giadien || p.giadien}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_GD)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.tongtien || p.tongtien}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TONGTIEN)}
                                                    /></td>
                                                <td style={{ textAlign: "center" }}>
                                                    <input
                                                        value={this.state.trangthai || p.trangthai}
                                                        onChange={(e) => this.handleChange(e, INPUT_TYPE.TEXT_TRANGTHAI)}
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
                                                        onEdit={this.handleEdit} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </div>

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
    bindActionCreators({ requestApiData_P }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(trangphong);

